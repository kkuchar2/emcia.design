const path = require('path');

module.exports = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/components')],
    },
    compiler: {
        styledComponents: true,
    }
};
