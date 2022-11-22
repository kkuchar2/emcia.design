import React from 'react';

import Document, {Head, Html, Main, NextScript} from 'next/document';
class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return <Html>
            <Head>
                <link rel={'manifest'} href={'/manifest.json'}/>
                <link rel={'apple-touch-icon'} href={'/images/pwa/icon_x256.png'}/>
                <link rel={'stylesheet'} href={'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap'} as={'style'} crossOrigin={''}/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>;
    };
}

export default MyDocument;
