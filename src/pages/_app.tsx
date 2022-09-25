import '../styles/globals.css';
import {useEffect} from 'react';
import React from 'react';

import {logEvent} from 'firebase/analytics';
import Head from 'next/head';

import {initAnalytics, initFirebase} from '../firebase';

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
        </Head>
        <Component {...pageProps} />
    </div>;
};

export default App;
