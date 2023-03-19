import React from 'react';

import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

interface HamburgerButtonProps {
    onClick?: () => void;
    navbarOpened?: boolean;
}

interface StyledHamburgerButtonProps {
    navbarOpened: boolean;
    gap?: number;
    isMobile?: boolean;
}

const StyledHamburgerButton = styled.button<StyledHamburgerButtonProps>`
  align-items: center;
  font-size: 16px;
  height: 60px;
  width: 60px;
  position: fixed;
  top: 50px;
  right: 40px;
  transform: translateY(-50%);
  z-index: 10;
  margin: 0;
  padding: 0;
  display: none;
  -webkit-tap-highlight-color: transparent;
  mix-blend-mode: ${({ navbarOpened }) => navbarOpened ? 'unset' : 'difference'};

  @media (max-width: 1024px) {
    display: block;
  }
`;

const StyledHamburgerButtonTopLine = styled.span<StyledHamburgerButtonProps>`
  width: 50%;
  height: 2px;
  position: absolute;
  top: ${({ navbarOpened, gap }) => !navbarOpened ? 'calc(50% - ' + gap + 'px)' : '50%'};
  transform: ${({ navbarOpened }) => navbarOpened ? 'translateX(-50%) rotate(-45deg)' : 'translateX(-50%) rotate(0deg)'};
  background-color: ${props => props.navbarOpened ? '#2c2c2c' : '#dfdfdf'};
  transition: all 0.3s cubic-bezier(0.68, 0.25, 0.265, 0.55);
`;

const StyledHamburgerButtonBottomLine = styled.span<StyledHamburgerButtonProps>`
  width: 50%;
  height: 2px;
  position: absolute;
  top: ${({ navbarOpened, gap }) => !navbarOpened ? 'calc(50% + ' + gap + 'px)' : '50%'};
  left: 50%;
  transform: ${({ navbarOpened }) => navbarOpened ? 'translateX(-50%) rotate(45deg)' : 'translateX(-50%) rotate(0deg)'};
  background-color: ${props => props.navbarOpened ? '#2c2c2c' : '#dfdfdf'};
  transition: all 0.3s cubic-bezier(0.68, -0.25, 0.265, 0.55);
`;

export const HamburgerButton = (props: HamburgerButtonProps) => {

    const { onClick, navbarOpened } = props;

    return <StyledHamburgerButton onClick={onClick} navbarOpened={navbarOpened} isMobile={isMobile}>
        <StyledHamburgerButtonTopLine navbarOpened={navbarOpened} gap={5}/>
        <StyledHamburgerButtonBottomLine navbarOpened={navbarOpened} gap={5}/>
    </StyledHamburgerButton>;
};