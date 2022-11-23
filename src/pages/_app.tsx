import {useEffect} from 'react';
import React from 'react';

import {logEvent} from 'firebase/analytics';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import SEO from '../../next-seo.config';
import {initAnalytics, initFirebase} from '../firebase';

import '../styles/globals.css';

const App = function ({ Component, pageProps }) {

    useEffect(() => {
        const app = initFirebase();
        const analytics = initAnalytics(app);
        if (analytics) {
            logEvent(analytics, 'hello_there');
        }
    }, []);

    return <div>
        <Head>
            <title>{'Emilia Markiewicz'}</title>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
    </div>;
};

export default App;
