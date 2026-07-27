#!/usr/bin/env node
/**
 * Upload Next.js `out/_next/static` to Cloudflare R2 (S3-compatible),
 * under a per-release prefix with meta manifests for cleanup.
 *
 * Layout:
 *   {R2_PREFIX}/releases/{releaseId}/_next/static/...
 *   {R2_PREFIX}/_meta/latest.json
 *   {R2_PREFIX}/_meta/builds/{releaseId}.json
 *
 * Env:
 *   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
 *   R2_PREFIX          — project folder (e.g. emcia, galeria)
 *   ASSET_PREFIX       — CDN *base* only (e.g. https://cdn.static.kkucharski.com/emcia)
 *                        Effective public prefix = {ASSET_PREFIX}/releases/{releaseId}
 *                        Must NOT already contain /releases/
 *   CF_PAGES_COMMIT_SHA / RELEASE_ID — release id (first 7 chars); default "local"
 *   SITE_URL / SITE_URLS — optional live site URL(s) stored in meta for cleanup validation
 *   R2_JURISDICTION    — optional; `eu` | `fedramp` (kkucharski-static is EU → `eu`)
 *   R2_ENDPOINT        — optional override
 *   STRIP_LOCAL_STATIC — if "1", remove out/_next/static after upload
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
  CF_PAGES_COMMIT_SHA,
  RELEASE_ID,
  SITE_URL,
  SITE_URLS,
} = process.env;

function die(msg) {
  console.error(`[upload-static] ${msg}`);
  process.exit(1);
}

function releaseId() {
  const raw = (CF_PAGES_COMMIT_SHA || RELEASE_ID || 'local').trim();
  return raw.slice(0, 7) || 'local';
}

function assetBase() {
  if (!ASSET_PREFIX) return '';
  return ASSET_PREFIX.replace(/\/+$/, '');
}

function parseSiteUrls() {
  const raw = (SITE_URLS || SITE_URL || '').trim();
  if (!raw) return [];
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function maskAccessKeyId(id) {
  if (!id) return '(missing)';
  if (id.length <= 8) return `${id.slice(0, 2)}…(${id.length} chars)`;
  return `${id.slice(0, 4)}…${id.slice(-4)} (${id.length} chars)`;
}

function redactEndpoint(url) {
  try {
    const u = new URL(url);
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
  const host = juris
    ? `${R2_ACCOUNT_ID}.${juris}.r2.cloudflarestorage.com`
    : `${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
  return `https://${host}`;
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
  '.wasm': 'application/wasm',
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

function logAuthDebug({ endpoint, prefix, rid, effectiveAssetPrefix }) {
  const juris = R2_JURISDICTION.trim() || '(none — use eu for EU jurisdiction buckets)';
  console.log('[upload-static] auth debug (no secrets):');
  console.log(`  bucket=${R2_BUCKET}`);
  console.log(`  prefix=${prefix}`);
  console.log(`  release=${rid}`);
  console.log(`  jurisdiction=${juris}`);
  console.log(`  asset_prefix_base=${assetBase() || '(unset)'}`);
  console.log(`  asset_prefix_effective=${effectiveAssetPrefix}`);
  console.log(`  endpoint=${redactEndpoint(endpoint)}`);
  console.log(`  access_key_id=${maskAccessKeyId(R2_ACCESS_KEY_ID)}`);
  console.log(`  secret_access_key=set len=${(R2_SECRET_ACCESS_KEY || '').length}`);
  console.log(`  account_id=set len=${(R2_ACCOUNT_ID || '').length}`);
  console.log(`  site_urls=${parseSiteUrls().join(', ') || '(none)'}`);
}

async function putJson(client, bucket, key, body) {
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: JSON.stringify(body, null, 2),
      ContentType: 'application/json',
      CacheControl: 'no-cache',
    }),
  );
}

async function main() {
  if (!hasR2Creds()) {
    if (ASSET_PREFIX) {
      die(
        'ASSET_PREFIX is set but R2 credentials are missing (R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET).',
      );
    }
    console.log('[upload-static] No R2 credentials — skipping upload (local build).');
    return;
  }

  if (!R2_PREFIX.trim()) die('R2_PREFIX must be set (e.g. emcia).');
  const base = assetBase();
  if (!base) die('ASSET_PREFIX base is required when uploading (e.g. https://cdn.static.kkucharski.com/emcia).');
  if (base.includes('/releases/')) {
    die(
      'ASSET_PREFIX must be the CDN base only (no /releases/…). Release id is appended automatically.',
    );
  }
  if (!existsSync(staticDir)) die(`Missing ${staticDir} — run next build first.`);

  const prefix = R2_PREFIX.replace(/^\/+|\/+$/g, '');
  const rid = releaseId();
  const effectiveAssetPrefix = `${base}/releases/${rid}`;
  const staticKeyRoot = `${prefix}/releases/${rid}/_next/static`;
  const endpoint = resolveEndpoint();

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
  logAuthDebug({ endpoint, prefix, rid, effectiveAssetPrefix });
  console.log(`[upload-static] Uploading ${files.length} files to s3://${R2_BUCKET}/${staticKeyRoot}/`);

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

  const keys = [];
  for (const filePath of files) {
    const rel = relative(staticDir, filePath).split('\\').join('/');
    const key = `${staticKeyRoot}/${rel}`;
    await client.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: key,
        Body: createReadStream(filePath),
        ContentType: contentType(filePath),
        CacheControl: 'public, max-age=31536000, immutable',
      }),
    );
    keys.push(key);
    console.log(`  ok ${key}`);
  }

  const uploadedAt = new Date().toISOString();
  const siteUrls = parseSiteUrls();
  const manifest = {
    buildId: rid,
    r2Prefix: prefix,
    assetPrefix: effectiveAssetPrefix,
    assetPrefixBase: base,
    keys,
    keyCount: keys.length,
    uploadedAt,
    siteUrls,
  };

  const buildMetaKey = `${prefix}/_meta/builds/${rid}.json`;
  const latestMetaKey = `${prefix}/_meta/latest.json`;
  await putJson(client, R2_BUCKET, buildMetaKey, manifest);
  await putJson(client, R2_BUCKET, latestMetaKey, manifest);
  console.log(`[upload-static] Wrote ${buildMetaKey}`);
  console.log(`[upload-static] Wrote ${latestMetaKey}`);

  const shouldStrip = STRIP_LOCAL_STATIC === '1';
  if (shouldStrip) {
    rmSync(staticDir, { recursive: true, force: true });
    console.log('[upload-static] Removed out/_next/static from Pages artifact.');
  } else {
    console.log(
      '[upload-static] Keeping out/_next/static on Pages (set STRIP_LOCAL_STATIC=1 to remove).',
    );
  }

  console.log('[upload-static] Done.');
}

main().catch((err) => {
  console.error('[upload-static] Failed:', err);
  process.exit(1);
});
