import React, { useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { Page } from 'components/Pages/Page';
import { SEO } from 'components/SEO/SEO';
import useScrollbarWidth from 'hooks/use-scrollbar-width';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import MainContextProvider from '../MainContext';

import '../styles/globals.css';

export interface PageProps {
    seoKey: string;
}

const inter = Inter({
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap'
});

const App = function ({ Component, pageProps }: { Component: React.ElementType<PageProps>; pageProps: PageProps }) {

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

    return <main className={inter.className}>
        <Head>
            <title>{'Emilia Markiewicz'}</title>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5'}/>
            <title>{'Emilia Markiewicz'}</title>
        </Head>

        <SEO seoKey={pageProps.seoKey}/>

        <MainContextProvider>
            <Page component={Component} pageProps={pageProps}/>
            <Analytics/>
        </MainContextProvider>
    </main>;
};

export default App;
