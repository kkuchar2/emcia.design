import React, { useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { Page } from 'components/Pages/Page';
import useScrollbarWidth from 'hooks/use-scrollbar-width';
import Head from 'next/head';
import { DefaultSeo, SocialProfileJsonLd, WebPageJsonLd } from 'next-seo';

import SEO from '../../next-seo.config';
import MainContextProvider from '../MainContext';

import '../styles/globals.css';

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

    return <div>
        <Head>
            <title>{'Emilia Markiewicz'}</title>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5'}/>
            <title>{'Emilia Markiewicz'}</title>
        </Head>

        <DefaultSeo {...SEO} />

        <SocialProfileJsonLd
            type={'Person'}
            name={'Emilia Markiewicz'}
            url={'https://emcia.design'}
            sameAs={[
                'https://www.behance.net/emiliamarkiewicz',
                'https://dribbble.com/emiliamarkiewicz',
                'https://www.linkedin.com/in/emiliamarkiewicz',
            ]}
        />
        <WebPageJsonLd
            id={'https://emcia.design'}
            name={'Emilia Markiewicz - UI/UX Designer Portfolio'}
            description={'I\'m Emilia Markiewicz, an UI/UX designer specializing in creating beautiful and functional user interfaces. Check out my portfolio to see my work.'}
            url={'https://emcia.design'}
            author={{
                '@type': 'Person',
                'name': 'Emilia Markiewicz',
            }}
        />

        <MainContextProvider>
            <Page component={Component} pageProps={pageProps}/>
            <Analytics/>
        </MainContextProvider>
    </div>;
};

export default App;
