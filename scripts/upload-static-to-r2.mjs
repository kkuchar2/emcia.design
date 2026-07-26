#!/usr/bin/env node
/**
 * Upload Next.js `out/_next/static` to Cloudflare R2 (S3-compatible).
 *
 * Env:
 *   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
 *   R2_PREFIX          — project folder in the shared bucket (e.g. emcia)
 *   ASSET_PREFIX       — public CDN URL prefix (e.g. https://cdn.static.kkucharski.com/emcia)
 *   R2_ENDPOINT        — optional; default https://$R2_ACCOUNT_ID.r2.cloudflarestorage.com
 *   STRIP_LOCAL_STATIC — if "1" or ASSET_PREFIX set, remove out/_next/static after upload
 *
 * Local builds without R2 creds: skip (exit 0).
 * ASSET_PREFIX set without R2 creds: fail (misconfigured CF Pages env).
 */
import { createReadStream, existsSync, readdirSync, statSync, rmSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const staticDir = join(root, 'out', '_next', 'static');

const {
  ASSET_PREFIX,
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET,
  R2_PREFIX = 'emcia',
  R2_ENDPOINT,
  STRIP_LOCAL_STATIC,
} = process.env;

function die(msg) {
  console.error(`[upload-static] ${msg}`);
  process.exit(1);
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
  const endpoint = R2_ENDPOINT || `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
  const client = new S3Client({
    region: 'auto',
    endpoint,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
  });

  const files = walkFiles(staticDir);
  console.log(`[upload-static] Uploading ${files.length} files to s3://${R2_BUCKET}/${prefix}/_next/static/`);

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
