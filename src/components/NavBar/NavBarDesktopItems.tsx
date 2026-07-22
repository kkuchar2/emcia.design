import React from 'react';

import { NavBarItem } from 'components/NavBar/NavBarItem';
import { resolveNavItems } from 'components/NavBar/navItems';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { INavbarConfig } from '../../portfolioConfig.types';

const StyledNavBarDesktopItems = styled.ul`
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
  padding: 0 30px 0 0;
  margin: 0;
  list-style: none;
`;

export const NavBarDesktopItems = (props: INavbarConfig) => {
    const { items, projectLabels } = props;
    const pathname = usePathname();
    const navItems = resolveNavItems(items, pathname, projectLabels);

    return <StyledNavBarDesktopItems className={'ease opacity-[--navbar-opacity] transition-opacity duration-[800ms]'}>
        {navItems.map((item, index) => (
            <li key={item.link}>
                <NavBarItem index={index} {...item}/>
            </li>
        ))}
    </StyledNavBarDesktopItems>;
};
