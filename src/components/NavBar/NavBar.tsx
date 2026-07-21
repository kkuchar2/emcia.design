import React, { useCallback, useEffect } from 'react';

import { HamburgerButton } from 'components/HamburgerButton/HamburgerButton';
import { NavBarDesktopItems } from 'components/NavBar/NavBarDesktopItems';
import { NavBarMobileItems } from 'components/NavBar/NavBarMobileItems';
import { useScreenWidth } from 'hooks/use-screen';
import { isScrollbarVisible, setScrollbarWidthMultiplier } from 'hooks/use-scrollbar-width';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { useMainContext } from '../../MainContext';
import { portfolioConfig } from '../../portfolioConfig';

const StyledOverlay = styled.div`
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
  pointer-events: none;

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

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.2s ease, width 0s, height 0s, top 0s, right 0s, transform 0s;

    &.opened {
      transition: opacity 0.2s ease, width 0s, height 0s, top 0s, right 0s, transform 0s;
    }
  }
`;

const StyledOverlay2 = styled.div`
  position: fixed;
  inset: 0;
  background: #313131;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.35s ease, visibility 0.35s ease;

  &.opened {
    opacity: 1;
    visibility: visible;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NavBar = () => {
    const screenWidth = useScreenWidth();
    const { navbarOpened, toggleNavbar, setNavbarOpened } = useMainContext();
    const pathname = usePathname();

    useEffect(() => {
        setNavbarOpened(false);
    }, [pathname, setNavbarOpened]);

    useEffect(() => {
        if (screenWidth > 1024) {
            setNavbarOpened(false);
        }
    }, [screenWidth, setNavbarOpened]);

    useEffect(() => {
        setScrollbarWidthMultiplier(isScrollbarVisible() ? 1 : 0);
    }, [navbarOpened]);

    useEffect(() => {
        if (!navbarOpened) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setNavbarOpened(false);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [navbarOpened, setNavbarOpened]);

    const onHamburgerClick = useCallback(() => {
        toggleNavbar();
    }, [toggleNavbar]);

    return <nav aria-label={'Main'}>
        <HamburgerButton onClick={onHamburgerClick} navbarOpened={navbarOpened}/>

        <div className={'hidden lg:block'}>
            <NavBarDesktopItems {...portfolioConfig.navBarConfig} />
        </div>
        <div className={'lg:hidden'}>
            <NavBarMobileItems {...portfolioConfig.navBarConfig} />
        </div>
        <div className={'lg:hidden'} aria-hidden={true}>
            <StyledOverlay className={navbarOpened ? 'opened' : ''}/>
            <StyledOverlay2 className={navbarOpened ? 'opened' : ''}/>
        </div>
    </nav>;
};
