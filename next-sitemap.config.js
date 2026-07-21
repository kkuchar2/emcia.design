/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://emcia.design',
    generateRobotsTxt: true,
    // Required when using Next.js `output: 'export'`
    outDir: 'out',
};
