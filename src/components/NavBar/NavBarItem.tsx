import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { useMainContext } from '../../MainContext';
import { INavBarItem } from '../../portfolioConfig.types';
import { isNavItemActive } from './navItems';

interface StyledNavBarItemProps {
    index: number;
    $active: boolean;
}

export const StyledNavBarItem = styled(Link)<StyledNavBarItemProps>`
  --index: ${({ index }) => index};
  min-width: 120px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  text-transform: lowercase;
  color: inherit;
  text-decoration: none;
  outline: none;
  transition: color 200ms cubic-bezier(0.22, 1, 0.36, 1);

  &:active {
    font-weight: 700;
  }

  &:after {
    display: none;
    content: '';
    position: absolute;
    width: ${({ $active }) => ($active ? '65%' : '0')};
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    bottom: 5px;
    background: #f1f1f1;
    transition: width 0.5s cubic-bezier(0.075, 0.82, 0.265, 1),
      opacity 0.5s cubic-bezier(0.075, 0.82, 0.265, 1);
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    border-radius: 2px;
  }

  &:hover {
    cursor: pointer;
    color: #ffffff;

    &:after {
      width: 65%;
      opacity: 1;
      background: #f1f1f1;
    }
  }

  &:focus-visible {
    color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 0 2px #f1f1f1;
  }

  &:focus-visible:after {
    width: 65%;
    opacity: 1;
  }

  @media (max-height: 600px) {
    &:after {
      display: none;
    }

    &:hover:after,
    &:focus-visible:after {
      display: none;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;

    &:hover {
      font-weight: ${({ $active }) => ($active ? 600 : 500)};
    }

    &:after {
      display: block;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:after {
      transition: none;
    }
  }
`;

interface INavbarItemProps {
    index: number;
}

export const NavBarItem = (item: INavBarItem & INavbarItemProps) => {
    const { title, link, index } = item;
    const pathname = usePathname();
    const { navbarOpened, setNavbarOpened } = useMainContext();
    const active = isNavItemActive(pathname, link);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === link && navbarOpened) {
            e.preventDefault();
            setNavbarOpened(false);
        }
    };

    return <StyledNavBarItem
        index={index}
        $active={active}
        href={link}
        title={title}
        aria-current={active ? 'page' : undefined}
        onClick={handleClick}
    >
        {title.toLowerCase()}
    </StyledNavBarItem>;
};
