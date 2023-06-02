import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { INavBarItem } from '../../portfolioConfig.types';

interface StyledNavBarItemProps {
    index: number;
}

export const StyledNavBarItem = styled(Link)<StyledNavBarItemProps>`
  --index: ${({ index }) => index};
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-weight: 500;
  text-transform: lowercase;

  // when pressed:
  &:active {
    font-weight: 700;
  }

  &:after {
    display: none;
    content: '';
    position: absolute;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    bottom: 5px;
    background: #c3c3c3;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.265, 1);
    opacity: 0;
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

  @media (max-height: 600px) {
    &:after {
      display: none;
    }

    &:hover {

      &:after {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    justify-content: center;

    &:hover {
      font-weight: 500;
    }

    &:after {
      display: block;
    }
  }
`;

interface INavbarItemProps {
    index: number;
}

export const NavBarItem = (item: INavBarItem & INavbarItemProps) => {

    const { title, link, index } = item;

    return <StyledNavBarItem index={index} href={link} title={title}>
        {title.toLowerCase()}
    </StyledNavBarItem>;
};