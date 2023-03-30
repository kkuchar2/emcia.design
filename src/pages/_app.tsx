import React, { useEffect } from 'react';

import { Page } from 'components/Pages/Page';
import { logEvent } from 'firebase/analytics';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import styled from 'styled-components';

import SEO from '../../next-seo.config';
import { initAnalytics, initFirebase } from '../firebase';
import MainContextProvider from '../MainContext';

import '../styles/globals.css';

const StyledApp = styled.div`
  //* {
  //  outline: 1px solid rgba(116, 18, 148, 0.63);
  //}

  width: 100%;
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
            <title>{'Emilia Markiewicz'}</title>
        </Head>

        <DefaultSeo {...SEO} />

        <MainContextProvider>
            <Page component={Component} pageProps={pageProps}/>
        </MainContextProvider>
    </StyledApp>;
};

export default App;
