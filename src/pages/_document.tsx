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
                <link rel={'stylesheet'} href={'/fonts/style.css'}/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>;
    };
}

export default MyDocument;