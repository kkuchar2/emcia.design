const path = require('path');

const assetBase = (process.env.ASSET_PREFIX || '').replace(/\/+$/, '');
const releaseId = (process.env.CF_PAGES_COMMIT_SHA || process.env.RELEASE_ID || 'local')
  .trim()
  .slice(0, 7) || 'local';

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    // Static export for Cloudflare Pages (same pattern as galeria_weselna_frontend)
    output: 'export',
    // Pages sets ASSET_PREFIX base only (e.g. https://cdn.static.kkucharski.com/emcia).
    // Effective prefix includes /releases/{sha} so each deploy is isolated on R2/Bunny.
    assetPrefix: assetBase ? `${assetBase}/releases/${releaseId}` : undefined,
    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/components')],
    },
    compiler: {
        styledComponents: true,
    },
};
