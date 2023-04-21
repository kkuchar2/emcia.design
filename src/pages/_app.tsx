import React, { useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { Page } from 'components/Pages/Page';
import useScrollbarWidth from 'hooks/use-scrollbar-width';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import styled from 'styled-components';

import SEO from '../../next-seo.config';
import MainContextProvider from '../MainContext';

import '../styles/globals.css';

const StyledApp = styled.div`
  //* {
  //  outline: 1px solid rgba(116, 18, 148, 0.63);
  //}
`;

const App = function ({ Component, pageProps }) {

    useScrollbarWidth();

    useEffect(() => {

        const onScroll = () => {
            const screenHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const scrollProgress = scrollY / (document.body.scrollHeight - screenHeight);

            document.body.style.setProperty('--scroll-progress', scrollProgress.toString());

            if (scrollY > screenHeight / 4) {
                document.body.style.setProperty('--scroll-indicator-opacity', '0');
            } else {
                document.body.style.setProperty('--scroll-indicator-opacity', '1');
            }

        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });

    return <StyledApp>
        <Head>
            <title>{'Emilia Markiewicz'}</title>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5'}/>
            <title>{'Emilia Markiewicz'}</title>
        </Head>

        <DefaultSeo {...SEO} />

        <MainContextProvider>
            <Page component={Component} pageProps={pageProps}/>
            <Analytics/>
        </MainContextProvider>
    </StyledApp>;
};

export default App;
