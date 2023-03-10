import React from 'react';
import styled, { keyframes } from 'styled-components';

interface HamburgerButtonProps {
    onClick: () => void;
    navbarOpened: boolean;
}

interface StyledHamburgerButtonProps {
    navbarOpened: boolean;
    gap?: number;
}

const showHamburger = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledHamburgerButton = styled.button<StyledHamburgerButtonProps>`
  align-items: center;
  font-size: 16px;
  height: 60px;
  width: 60px;
  position: fixed;
  top: 50px;
  right: 30px;
  transform: translateY(-50%);
  z-index: 4;
  margin: 0;
  padding: 0;
  display: none;
  -webkit-tap-highlight-color: transparent;
  animation: ${showHamburger} 800ms ease;

  mix-blend-mode: ${({ navbarOpened }) => navbarOpened ? 'unset' : 'difference'};

  @media (max-width: 768px) {
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

    return <StyledHamburgerButton onClick={onClick} navbarOpened={navbarOpened}>
        <StyledHamburgerButtonTopLine navbarOpened={navbarOpened} gap={5}/>
        <StyledHamburgerButtonBottomLine navbarOpened={navbarOpened} gap={5}/>
    </StyledHamburgerButton>;
};