import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { INavBarItem } from '../../protfolioConfig.types';

const StyledNavBarItem = styled(Link)`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-weight: 500;
  transition: transform 0.3s ease-in-out, color 0.2s ease-in-out;
  text-transform: lowercase;

  &:after {
    display: none;
    content: '';
    position: absolute;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    bottom: 10px;
    background: #c3c3c3;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.265, 1);
    opacity: 0;
    border-radius: 2px;
  }

  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: #ffffff;

    &:after {
      width: 65%;
      opacity: 1;
      background: white;
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

export const NavBarItem = (item: INavBarItem) => {

    const { title, link } = item;

    return <StyledNavBarItem href={link}>
        {title.toLowerCase()}
    </StyledNavBarItem>;
};