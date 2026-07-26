#!/usr/bin/env node
/**
 * Upload Next.js `out/_next/static` to Cloudflare R2 (S3-compatible).
 *
 * Env:
 *   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
 *   R2_PREFIX          — project folder in the shared bucket (e.g. emcia)
 *   ASSET_PREFIX       — public CDN URL prefix (e.g. https://cdn.static.kkucharski.com/emcia)
 *   R2_JURISDICTION    — optional; `eu` | `fedramp` for jurisdiction buckets
 *                        (kkucharski-static is EU → must be `eu`)
 *   R2_ENDPOINT        — optional override; else built from account + jurisdiction
 *   STRIP_LOCAL_STATIC — if "1" or ASSET_PREFIX set, remove out/_next/static after upload
 *
 * Local builds without R2 creds: skip (exit 0).
 * ASSET_PREFIX set without R2 creds: fail (misconfigured CF Pages env).
 */
import { createReadStream, existsSync, readdirSync, statSync, rmSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { S3Client, PutObjectCommand, HeadBucketCommand } from '@aws-sdk/client-s3';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const staticDir = join(root, 'out', '_next', 'static');

const {
  ASSET_PREFIX,
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET,
  R2_PREFIX = 'emcia',
  R2_JURISDICTION = '',
  R2_ENDPOINT,
  STRIP_LOCAL_STATIC,
} = process.env;

function die(msg) {
  console.error(`[upload-static] ${msg}`);
  process.exit(1);
}

/** Mask access key id for logs (never log secret / full account id). */
function maskAccessKeyId(id) {
  if (!id) return '(missing)';
  if (id.length <= 8) return `${id.slice(0, 2)}…(${id.length} chars)`;
  return `${id.slice(0, 4)}…${id.slice(-4)} (${id.length} chars)`;
}

/** Redact account id from endpoint host for build logs. */
function redactEndpoint(url) {
  try {
    const u = new URL(url);
    // <account>.r2… or <account>.eu.r2… or <account>.fedramp.r2…
    u.hostname = u.hostname.replace(/^[^.]+/, '***');
    return u.toString().replace(/\/$/, '');
  } catch {
    return '(invalid endpoint)';
  }
}

function resolveEndpoint() {
  if (R2_ENDPOINT) return R2_ENDPOINT.replace(/\/+$/, '');
  const juris = R2_JURISDICTION.trim().toLowerCase();
  if (juris && !/^[a-z0-9-]+$/.test(juris)) {
    die(`Invalid R2_JURISDICTION="${R2_JURISDICTION}" (use eu, fedramp, or empty).`);
  }
  // EU / FedRAMP jurisdiction buckets require a jurisdiction-specific host.
  // https://developers.cloudflare.com/r2/reference/data-location/
  const host = juris
    ? `${R2_ACCOUNT_ID}.${juris}.r2.cloudflarestorage.com`
    : `${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
  return `https://${host}`;
}

function logAuthDebug(endpoint) {
  const juris = R2_JURISDICTION.trim() || '(none — use eu for EU jurisdiction buckets)';
  console.log('[upload-static] auth debug (no secrets):');
  console.log(`  bucket=${R2_BUCKET}`);
  console.log(`  prefix=${R2_PREFIX}`);
  console.log(`  jurisdiction=${juris}`);
  console.log(`  asset_prefix=${ASSET_PREFIX || '(unset)'}`);
  console.log(`  endpoint=${redactEndpoint(endpoint)}`);
  console.log(`  access_key_id=${maskAccessKeyId(R2_ACCESS_KEY_ID)}`);
  console.log(`  secret_access_key=set len=${(R2_SECRET_ACCESS_KEY || '').length}`);
  console.log(`  account_id=set len=${(R2_ACCOUNT_ID || '').length}`);
  console.log(`  r2_endpoint_override=${R2_ENDPOINT ? 'yes' : 'no'}`);
}

function hasR2Creds() {
  return Boolean(R2_ACCOUNT_ID && R2_ACCESS_KEY_ID && R2_SECRET_ACCESS_KEY && R2_BUCKET);
}

const CONTENT_TYPES = {
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.map': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.txt': 'text/plain',
};

function contentType(filePath) {
  return CONTENT_TYPES[extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function walkFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walkFiles(p));
    else out.push(p);
  }
  return out;
}

async function main() {
  if (!hasR2Creds()) {
    if (ASSET_PREFIX) {
      die('ASSET_PREFIX is set but R2 credentials are missing (R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET).');
    }
    console.log('[upload-static] No R2 credentials — skipping upload (local build).');
    return;
  }

  if (!R2_PREFIX.trim()) die('R2_PREFIX must be set (e.g. emcia).');
  if (!existsSync(staticDir)) die(`Missing ${staticDir} — run next build first.`);

  const prefix = R2_PREFIX.replace(/^\/+|\/+$/g, '');
  const endpoint = resolveEndpoint();
  // AWS SDK ≥3.729 sends default checksum headers; R2 rejects them as AccessDenied.
  // https://developers.cloudflare.com/r2/examples/aws/aws-sdk-js-v3/
  const client = new S3Client({
    region: 'auto',
    endpoint,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
  });

  const files = walkFiles(staticDir);
  logAuthDebug(endpoint);
  console.log(`[upload-static] Uploading ${files.length} files to s3://${R2_BUCKET}/${prefix}/_next/static/`);

  try {
    await client.send(new HeadBucketCommand({ Bucket: R2_BUCKET }));
    console.log(`[upload-static] HeadBucket ok for ${R2_BUCKET}`);
  } catch (err) {
    const code = err?.Code || err?.name || 'unknown';
    const status = err?.$metadata?.httpStatusCode;
    console.error(
      `[upload-static] HeadBucket failed: code=${code} status=${status ?? 'n/a'} — check R2_JURISDICTION=eu for EU buckets, token Object Read & Write on this bucket, and access key id.`,
    );
    throw err;
  }
  for (const filePath of files) {
    const rel = relative(staticDir, filePath).split('\\').join('/');
    const key = `${prefix}/_next/static/${rel}`;
    await client.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: key,
        Body: createReadStream(filePath),
        ContentType: contentType(filePath),
        CacheControl: 'public, max-age=31536000, immutable',
      }),
    );
    console.log(`  ok ${key}`);
  }

  const shouldStrip = STRIP_LOCAL_STATIC === '1' || Boolean(ASSET_PREFIX);
  if (shouldStrip) {
    rmSync(staticDir, { recursive: true, force: true });
    console.log('[upload-static] Removed out/_next/static from Pages artifact.');
  }

  console.log('[upload-static] Done.');
}

main().catch((err) => {
  console.error('[upload-static] Failed:', err);
  process.exit(1);
});
