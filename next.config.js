const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    // Static export for Cloudflare Pages (same pattern as galeria_weselna_frontend)
    output: 'export',
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
