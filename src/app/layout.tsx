'use client';

import React, { useEffect } from 'react';

import { Inter } from 'next/font/google';

import { NavBar } from 'components/NavBar/NavBar';
import useScrollbarWidth, { isScrollbarVisible, setScrollbarWidthMultiplier } from 'hooks/use-scrollbar-width';

import MainContextProvider from '../MainContext';

import StyledComponentsRegistry from './registry';

import '../styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
    fallback: ['sans-serif'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

    useScrollbarWidth();

    useEffect(() => {
        setScrollbarWidthMultiplier(isScrollbarVisible() ? 1 : 0);
    }, [children]);

    useEffect(() => {

        const onScroll = () => {
            const screenHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const scrollProgress = scrollY / (document.body.scrollHeight - screenHeight);

            document.body.style.setProperty('--scroll-progress', scrollProgress.toString());

            if (scrollY > screenHeight / 4) {
                document.body.style.setProperty('--scroll-indicator-opacity', '0');
            }
            else {
                document.body.style.setProperty('--scroll-indicator-opacity', '1');
            }

        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return <html lang={'en'}>
        <head>
            <link rel={'manifest'} href={'/manifest.json'}/>
            <link rel={'apple-touch-icon'} href={'/images/pwa/icon_x256.png'}/>
            <title>{'Emilia Markiewicz'}</title>
        </head>
        <body>
            <main className={inter.className}>
                <StyledComponentsRegistry>
                    <MainContextProvider>
                        <NavBar/>
                        {children}
                    </MainContextProvider>
                </StyledComponentsRegistry>
            </main>
        </body>
    </html>;
}