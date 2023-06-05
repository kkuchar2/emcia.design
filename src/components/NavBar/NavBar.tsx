import React, { useCallback, useEffect } from 'react';

import { HamburgerButton } from 'components/HamburgerButton/HamburgerButton';
import { NavBarDesktopItems } from 'components/NavBar/NavBarDesktopItems';
import { NavBarMobileItems } from 'components/NavBar/NavBarMobileItems';
import { useScreenWidth } from 'hooks/use-screen';
import { isScrollbarVisible, setScrollbarWidthMultiplier } from 'hooks/use-scrollbar-width';
import { usePathname } from 'next/navigation';

import { useMainContext } from '../../MainContext';
import { portfolioConfig } from '../../portfolioConfig';

import styles from './NavBar.module.scss';

export const NavBar = () => {

    const screenWidth = useScreenWidth();

    const { navbarOpened, toggleNavbar, setNavbarOpened } = useMainContext();

    const pathname = usePathname();

    useEffect(() => {
        setNavbarOpened(false);
        document.body.style.overflow = '';
    }, [pathname, setNavbarOpened]);

    useEffect(() => {
        if (screenWidth > 1024) {
            setNavbarOpened(false);
        }
    }, [screenWidth]);

    useEffect(() => {
        setScrollbarWidthMultiplier(isScrollbarVisible() ? 1 : 0);
    }, [navbarOpened]);

    const onHamburgerClick = useCallback(() => {
        toggleNavbar();
    }, [toggleNavbar]);

    return <>
        <HamburgerButton onClick={onHamburgerClick} navbarOpened={navbarOpened}/>

        <div className={'hidden lg:block'}>
            <NavBarDesktopItems {...portfolioConfig.navBarConfig} />
        </div>
        <div className={'lg:hidden'}>
            <NavBarMobileItems {...portfolioConfig.navBarConfig} />
        </div>
        <div className={'lg:hidden'}>
            <div className={`${styles.overlay} ${navbarOpened ? styles.opened : ''}`}/>
            <div className={`${styles.overlay2} ${navbarOpened ? styles.opened : ''}`}/>
        </div>
    </>;
};