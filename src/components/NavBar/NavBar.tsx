import React, { useCallback, useEffect } from 'react';

import { HamburgerButton } from 'components/HamburgerButton/HamburgerButton';
import { NavBarDesktopItems } from 'components/NavBar/NavBarDesktopItems';
import { NavBarMobileItems } from 'components/NavBar/NavBarMobileItems';
import { useScreenWidth } from 'hooks/use-screen';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';

import { useMainContext } from '../../MainContext';
import { projectConfig } from '../../projectConfig';

interface StyledOverlayProps {
    opened: boolean;
}

const overlayAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  100% {
    width: max(200vh, 200vw);
    height: max(200vh, 200vw);
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

const StyledOverlay = styled.div<StyledOverlayProps>`
  position: fixed;
  content: '';
  background: #ffffff;
  z-index: 3;
  transition: all 2.3s ease;
  border-radius: 50%;
  width: ${({ opened }) => opened ? '100vh' : '0px'};
  height: ${({ opened }) => opened ? '100vh' : '0px'};
  top: ${({ opened }) => opened ? '50%' : '0'};
  right: ${({ opened }) => opened ? '50%' : '0'};
  transform: ${({ opened }) => opened ? 'translate(50%, -50%)' : 'translate(50%, -50%)'};
  animation: ${({ opened }) => opened ? overlayAnimation : 'none'} 0.8s ease forwards;
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

    const onHamburgerClick = useCallback(() => {
        toggleNavbar();
    }, [toggleNavbar]);

    return <>
        <HamburgerButton onClick={onHamburgerClick} navbarOpened={navbarOpened}/>
        {screenWidth > 1024 && <NavBarDesktopItems {...projectConfig.navBarConfig} />}
        {screenWidth <= 1024 && <NavBarMobileItems {...projectConfig.navBarConfig} />}
        {screenWidth <= 1024 && <StyledOverlay opened={navbarOpened}/>}
    </>;
};