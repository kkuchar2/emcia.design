const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
const nextBuildId = require('next-build-id');
const withPWA = require('next-pwa');

module.exports = withBundleAnalyzer(withPWA({
    reactStrictMode: false,
    compiler: {
        styledComponents: true
    },
    generateBuildId: async () => {
        const id = await nextBuildId({dir: __dirname});
        console.log('Generating build hash for NextJS modules:', id);
        return id;
    },
    pwa: {
        dest: 'public',
        register: true
    }
}));