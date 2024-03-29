import React, { useMemo } from 'react';

import { NavBarItem } from 'components/NavBar/NavBarItem';
import styled from 'styled-components';

import { INavbarConfig } from '../../portfolioConfig.types';

const StyledNavBarDesktopItems = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 3rem;
  align-items: center;
  font-size: 1.5rem;
  z-index: 2;
  mix-blend-mode: difference;
  color: #e5e5e5;
  will-change: opacity;
  animation: none;
  justify-content: flex-end;
  pointer-events: all;
  flex-direction: row;
  height: 100px;
  padding-right: calc(50px - (var(--scrollbar-width) * var(--scrollbar-width-multiplier)));
`;

export const NavBarDesktopItems = (props: INavbarConfig) => {

    const { ...config } = props;

    const items = useMemo(() => {
        return config.items.map((item, index) => <NavBarItem index={index} key={index} {...item}/>);
    }, []);

    return <StyledNavBarDesktopItems className={'ease opacity-[--navbar-opacity] transition-opacity duration-[800ms]'}>
        {items}
    </StyledNavBarDesktopItems>;
};