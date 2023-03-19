import React, { useMemo } from 'react';

import { NavBarItem } from 'components/NavBar/NavBarItem';
import styled, { keyframes } from 'styled-components';

import { useMainContext } from '../../MainContext';
import { INavbarConfig } from '../../projectConfig';

interface IStyledNavBarMobileItemsProps {
    opened: boolean;
}

const showAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const StyledNavBarMobileItems = styled.div<IStyledNavBarMobileItemsProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 4;
  mix-blend-mode: difference;
  color: #e5e5e5;
  will-change: opacity;
  height: 100vh;
  opacity: 0;
  animation: ${({ opened }) => opened ? showAnimation : 'none'} 0.3s ease forwards;
  animation-delay: 0.2s;
  pointer-events: ${({ opened }) => opened ? 'all' : 'none'};
  transition-delay: 0.2s;

  @media (orientation: landscape) {
    height: auto;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 50px 50px;
    align-items: center;
    justify-items: center;
  }
`;

export const NavBarMobileItems = (props: INavbarConfig) => {

    const { ...config } = props;

    const { navbarOpened } = useMainContext();

    const items = useMemo(() => {
        return config.items.map((item, index) => <NavBarItem key={index} {...item}/>);
    }, []);

    return <StyledNavBarMobileItems opened={navbarOpened}>
        {items}
    </StyledNavBarMobileItems>;
};