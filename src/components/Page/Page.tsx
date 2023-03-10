import { HamburgerButton } from 'components/HamburgerButton/HamburgerButton';
import { NavBar } from 'components/OverlayNavBar/NavBar';
import { ScrolledContent } from 'components/ScrolledContent/ScrolledContent';
import { useScreenWidth } from 'hooks/use-screen';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useRef } from 'react';

import { useMainContext } from '../../MainContext';
import { projectConfig } from '../../projectConfig';

import style from './Page.module.scss';

interface PageProps {
    component: React.FC;
    pageProps: any;
}

export const Page = (props: PageProps) => {

    const { component: Component, pageProps } = props;

    const { navbarOpened, toggleNavbar, setNavbarOpened } = useMainContext();

    const prevOpenedRef = useRef(false);

    const screenWidth = useScreenWidth();

    const router = useRouter();

    React.useEffect(() => {
        setNavbarOpened(false);
    }, [router, setNavbarOpened]);

    React.useEffect(() => {
        prevOpenedRef.current = navbarOpened;
    }, [navbarOpened]);

    React.useEffect(() => {
        if (screenWidth > 768) {
            setNavbarOpened(false);
        }
    }, [screenWidth]);

    const overlayClasses = useMemo(() => {
        return [
            style.styledOverlay,
            navbarOpened ? style.opened : style.hidden,
            screenWidth > 768 ? style.forcedHidden : ''
        ].join(' ');
    }, [navbarOpened, screenWidth]);

    const navbarClasses = useMemo(() => {
        if (screenWidth > 768) {
            return style.styledNavBar;
        }
        return [
            style.styledNavBar,
            navbarOpened ? style.opened : style.hidden,
        ].join(' ');
    }, [navbarOpened, screenWidth]);

    const onHamburgerClick = useCallback(() => {
        toggleNavbar();
    }, [toggleNavbar]);

    return <ScrolledContent component={Component} pageProps={pageProps}>
        <div className={style.overlay}/>
        <HamburgerButton onClick={onHamburgerClick} navbarOpened={navbarOpened}/>
        <NavBar className={navbarClasses} {...projectConfig.navBarConfig} />
        <div className={overlayClasses}/>
    </ScrolledContent>;
};