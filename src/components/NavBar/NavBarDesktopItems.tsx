import React, { useMemo } from 'react';

import { NavBarItem } from 'components/NavBar/NavBarItem';
import styled from 'styled-components';

import { INavbarConfig } from '../../projectConfig';

const StyledNavBarDesktopItems = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 3rem;
  align-items: center;
  font-size: 1.5rem;
  z-index: 4;
  mix-blend-mode: difference;
  color: #e5e5e5;
  transition: opacity 0.3s ease;
  transition-delay: 0.2s;
  will-change: opacity;
  animation: none;
  justify-content: flex-end;
  pointer-events: all;
  flex-direction: row;
  height: 100px;
  padding-right: 50px;
`;

export const NavBarDesktopItems = (props: INavbarConfig) => {

    const { ...config } = props;

    const items = useMemo(() => {
        return config.items.map((item, index) => <NavBarItem key={index} {...item}/>);
    }, []);

    return <StyledNavBarDesktopItems>
        {items}
    </StyledNavBarDesktopItems>;
};