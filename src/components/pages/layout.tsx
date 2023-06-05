'use client';

import React, { useEffect } from 'react';

import { NavBar } from 'components/NavBar/NavBar';
import useScrollbarWidth, { isScrollbarVisible, setScrollbarWidthMultiplier } from 'hooks/use-scrollbar-width';

import MainContextProvider from '../../MainContext';

import '../../styles/globals.css';

export const Layout = ({ children }: { children: React.ReactNode }) => {
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

    return <MainContextProvider>
        <NavBar/>
        {children}
    </MainContextProvider>;
};