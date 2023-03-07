const path = require('path');

const nextBuildId = require('next-build-id');

module.exports = {
    reactStrictMode: false,
    swcMinify: true,
    webpack5: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/components')],
    },
    compiler: {
        styledComponents: true,
    },
    generateBuildId: async () => {
        const id = await nextBuildId({ dir: __dirname });
        console.log('Generating build hash for NextJS modules:', id);
        return id;
    }
};
