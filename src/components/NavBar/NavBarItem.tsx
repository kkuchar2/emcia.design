import Link from 'next/link';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import { INavBarItem } from '../../projectConfig';

const showItem = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledNavBarItem = styled(Link)`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transform-style: preserve-3d;
  font-weight: 400;
  text-transform: none;
  transition: transform 0.3s ease-in-out;

  @keyframes showLine {
    0% {
      width: 0;
    }
    100% {
      width: 65%;
    }
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    bottom: 10px;
    background-color: white;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transform-origin: center center;
    font-weight: 500;

    &:after {
      width: 65%;
      opacity: 1;
      animation: showLine 0.3s ease forwards;
    }
  }

  @media (min-width: 768px) {
    text-transform: uppercase;
    justify-content: center;
    animation: ${showItem} 2.3s cubic-bezier(0.175, 0.82, 0.165, 1) forwards;
  }
`;

export const NavBarItem = (item: INavBarItem) => {

    const { title, link } = item;

    return <StyledNavBarItem href={link}>
        {title}
    </StyledNavBarItem>;
};