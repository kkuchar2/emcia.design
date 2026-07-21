import React from 'react';

import { NavBarItem, StyledNavBarItem } from 'components/NavBar/NavBarItem';
import styled from 'styled-components';

import { useMainContext } from '../../MainContext';
import { INavbarConfig } from '../../portfolioConfig.types';

interface IStyledNavBarMobileItemsProps {
    $opened: boolean;
}

const StyledNavBarMobileItems = styled.ul<IStyledNavBarMobileItemsProps>`
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
  margin: 0;
  padding: 0;
  list-style: none;
  pointer-events: ${({ $opened }) => ($opened ? 'all' : 'none')};
  visibility: ${({ $opened }) => ($opened ? 'visible' : 'hidden')};

  ${StyledNavBarItem} {
    transition: ${({ $opened }) => ($opened
        ? 'transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1)'
        : 'transform 0.2s ease, opacity 0.2s ease')};
    transition-delay: ${({ $opened }) => ($opened ? 'calc(var(--index) * 0.03s)' : '0s')};
    transform: ${({ $opened }) => ($opened ? 'translateY(0)' : 'translateY(-10svh)')};
    opacity: ${({ $opened }) => ($opened ? 1 : 0)};
  }

  @media (orientation: landscape) and (max-height: 520px) {
    height: auto;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem 2rem;
    padding: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    ${StyledNavBarItem} {
      transition: opacity 0.2s ease;
      transform: none;
    }
  }
`;

export const NavBarMobileItems = (props: INavbarConfig) => {
    const { items } = props;
    const { navbarOpened } = useMainContext();

    return <StyledNavBarMobileItems
        id={'mobile-navigation'}
        $opened={navbarOpened}
        aria-hidden={!navbarOpened}
        inert={!navbarOpened ? true : undefined}
    >
        {items.map((item, index) => (
            <li key={item.link}>
                <NavBarItem index={index} {...item}/>
            </li>
        ))}
    </StyledNavBarMobileItems>;
};
