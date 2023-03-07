import { Page } from 'components/Page/Page';
import { logEvent } from 'firebase/analytics';
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import SEO from '../../next-seo.config';
import { initAnalytics, initFirebase } from '../firebase';
import MainContextProvider from '../MainContext';

import '../styles/globals.css';
import '/node_modules/mouse-follower/src/scss/index.scss';

MouseFollower.registerGSAP(gsap);

const StyledApp = styled.div`
  //* {
  //  outline: 1px solid rgba(255, 0, 0, 0.11);
  //}
`;

const App = function ({ Component, pageProps }) {

    useEffect(() => {
        const app = initFirebase();
        const analytics = initAnalytics(app);
        if (analytics) {
            logEvent(analytics, 'hello_there');
        }
    }, []);

    return <StyledApp>
        <Head>
            <title>{'Emilia Markiewicz'}</title>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1.0 user-scalable=no'}/>
            {/*add global stylesheet here from public folder*/}
            <link rel={'stylesheet'} href={'/style.css'}/>
        </Head>

        <DefaultSeo {...SEO} />

        <MainContextProvider>
            <Page component={Component} pageProps={pageProps}/>
        </MainContextProvider>
    </StyledApp>;
};

export default App;
