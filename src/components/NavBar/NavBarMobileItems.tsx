import React, { useMemo } from 'react';

import { NavBarItem, StyledNavBarItem } from 'components/NavBar/NavBarItem';
import styled from 'styled-components';

import { useMainContext } from '../../MainContext';
import { INavbarConfig } from '../../portfolioConfig.types';

interface IStyledNavBarMobileItemsProps {
    $opened: boolean;
}

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
  height: 100dvh;
  pointer-events: ${({ $opened }) => $opened ? 'all' : 'none'};


  ${StyledNavBarItem} {
    transition: ${({ $opened }) => $opened ? 'all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1)' : 'all 0.2s ease'};
    transition-delay: calc(var(--index) * 0.03s); /* use a CSS variable to set the delay */
    transform: ${({ $opened }) => $opened ? 'translateY(0)' : 'translateY(-10svh)'};
    opacity: ${({ $opened }) => $opened ? 1 : 0};
  }


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
        return config.items.map((item, index) => <NavBarItem key={index} index={index} {...item}/>);
    }, []);

    return <StyledNavBarMobileItems $opened={navbarOpened}>
        {items}
    </StyledNavBarMobileItems>;
};