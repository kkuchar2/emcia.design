const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    // Static export for Cloudflare Pages (same pattern as galeria_weselna_frontend)
    output: 'export',
    // Production CF build sets ASSET_PREFIX=https://cdn.static.kkucharski.com/emcia
    // so hashed /_next/static assets are loaded from Bunny → R2 (assets-before-HTML).
    assetPrefix: process.env.ASSET_PREFIX || undefined,
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
