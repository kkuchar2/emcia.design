import React, { useCallback, useEffect } from 'react';

import { HamburgerButton } from 'components/HamburgerButton/HamburgerButton';
import { NavBarDesktopItems } from 'components/NavBar/NavBarDesktopItems';
import { NavBarMobileItems } from 'components/NavBar/NavBarMobileItems';
import { useScreenWidth } from 'hooks/use-screen';
import { isScrollbarVisible, setScrollbarWidthMultiplier } from 'hooks/use-scrollbar-width';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useMainContext } from '../../MainContext';
import { portfolioConfig } from '../../portfolioConfig';

interface StyledOverlayProps {
    opened: boolean;
}

const StyledOverlay = styled.div<StyledOverlayProps>`
  position: fixed;
  content: '';
  background: #f1f1f1;
  z-index: 3;
  transition: all 1s cubic-bezier(0.575, 0.82, 0.165, 1);
  border-radius: 50%;
  width: 0;
  height: 0;
  top: 50px;
  right: calc(40px - (var(--scrollbar-width) * var(--scrollbar-width-multiplier)) + 30px);
  transform: translate(50%, -50%);

  @media (orientation: landscape) {
    width: 0;
    height: 0;
    border-radius: 50%;
  }

  &.opened {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 150vh;
    height: 150vh;
    transition: all 1s cubic-bezier(0.575, 0.82, 0.165, 1);

    @media (orientation: landscape) {
      width: 250svw;
      height: 250svw;
    }

    @media (orientation: landscape) and (min-height: 600px) {
      width: 250vh;
      height: 250vh;
    }
  }
`;

const StyledOverlay2 = styled.div<StyledOverlayProps>`
  position: fixed;
  content: '';
  background: #313131;
  z-index: 2;
  width: 100svw;
  height: 100dvh;
  display: none;

  &.opened {
    display: block;
  }
`;

export const NavBar = () => {

    const screenWidth = useScreenWidth();

    const { navbarOpened, toggleNavbar, setNavbarOpened } = useMainContext();

    const router = useRouter();

    useEffect(() => {
        setNavbarOpened(false);
        document.body.style.overflow = '';
    }, [router, setNavbarOpened]);

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
    }, [toggleNavbar, navbarOpened]);

    return <>
        <HamburgerButton onClick={onHamburgerClick} navbarOpened={navbarOpened}/>

        <div className={'hidden lg:block'}>
            <NavBarDesktopItems {...portfolioConfig.navBarConfig} />
        </div>
        <div className={'lg:hidden'}>
            <NavBarMobileItems {...portfolioConfig.navBarConfig} />
        </div>
        <div className={'lg:hidden'}>
            <StyledOverlay
                className={navbarOpened ? 'opened' : ''}
                opened={navbarOpened}/>

            <StyledOverlay2
                className={navbarOpened ? 'opened' : ''}
                opened={navbarOpened}/>

        </div>
    </>;
};