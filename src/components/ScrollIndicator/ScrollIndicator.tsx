import React from 'react';

import styled from 'styled-components';

const StyledScrollIndicator = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2rem;
  height: 3.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(241, 241, 241, 0.34);
  display: flex;
  bottom: 50px;
  opacity: var(--scroll-indicator-opacity, 1);
  transition: opacity 0.5s ease;

  @media (orientation: landscape) {
    bottom: 10px;
    right: 20px;
    left: unset;
    transform: translateX(-50%) scale(0.8);
  }

  @media (min-width: 1024px) {
    display: none;
  }

  @keyframes dot {
    0% {
      width: 0;
      height: 0;
      top: 0.5rem;
      opacity: 0;
    }
    50% {
      width: 0.5rem;
      height: 0.5rem;
      opacity: 1;
    }
    100% {
      width: 0.5rem;
      height: 0.5rem;
      top: 2.5rem;
      opacity: 0;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #F1F1F1;
    animation: dot 2s ease infinite;
  }
`;

export const ScrollIndicator = () => {
    return <StyledScrollIndicator/>;
};