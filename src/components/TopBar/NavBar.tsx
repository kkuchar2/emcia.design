import React from 'react';

import styled from 'styled-components';

const StyledLink = styled.a`
  color: #5b5b5b;
  text-decoration: none;
  position: relative;

  @keyframes underline {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 80%;
    }
  }

  @keyframes underline2 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 50%;
    }
  }

  &:hover,
  &:focus,
  &:active {

    color: black;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #1e1e1e;
      animation: underline 0.3s ease forwards;
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #1e1e1e;
      animation: underline2 0.5s ease forwards;
    }
  }
`;

const NavBar = () => {
    return <div
        className={'w-full flex flex-wrap items-center justify-end ' +
            'flex-row fixed left-0 top-0 h-[100px] z-50 pl-5 pr-5 ' +
            '-webkit-tap-highlight-color: rgba(0, 0, 0, 0); gap-[30px]'}>

        <StyledLink href={'/'} className={'text-2xl'}>{'work'}</StyledLink>
        <StyledLink href={'/'} className={'text-2xl'}>{'contact'}</StyledLink>
    </div>;
};

export default NavBar;