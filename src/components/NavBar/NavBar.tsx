import { NavBarItem } from 'components/NavBar/NavBarItem';
import { useScreenWidth } from 'hooks/use-screen';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { useMainContext } from '../../MainContext';
import { INavbarConfig } from '../../projectConfig';

interface IStyledNavBarProps {
    opened: boolean;
    changed?: boolean;
    screenWidth: number;
}

const StyledNavbar = styled.nav<IStyledNavBarProps>`
  width: 100vw;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  color: #1e1e1e;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0;
  z-index: 3;
  justify-content: center;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      visibility: visible;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  > * {
    animation: ${({ opened }) => opened ? 'fadeIn 0.3s ease forwards' : 'fadeOut 0.3s ease forwards'};
  }

  @media (min-width: 768px) {
    color: white;
    justify-content: flex-end;
    background: none;
    flex-direction: row;
    top: 10px;
    right: 0;
    width: 100%;
    height: ${({ screenWidth, opened }) => screenWidth <= 768 && opened ? '100vh' : '100px'};
    padding-right: 100px;

    > * {
      animation: none;
    }
  }
`;
export const NavBar = (config: INavbarConfig) => {

    const { navbarOpened, setNavbarOpened } = useMainContext();

    const screenWidth = useScreenWidth();

    const items = useMemo(() => {
        return config.items.map((item, index) => <NavBarItem key={index} {...item}/>);
    }, [screenWidth]);

    return <>
        <StyledNavbar opened={navbarOpened} screenWidth={screenWidth}>
            {items}
        </StyledNavbar>
    </>;
};