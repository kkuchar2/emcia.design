import React from 'react';

import styled from 'styled-components';

const EmciaDisco = styled.div`
  @keyframes flip_horizontal {
    0% {
      transform: rotateY(0deg);
      background-position: unset;
    }
    24% {
      transform: rotateY(0deg);
      background-position: unset;
    }
    25% {
      transform: rotateY(180deg);
      background-position: center;
    }
    49% {
      transform: rotateY(180deg);
      background-position: center;
    }
    50% {
      transform: rotateY(0deg);
      background-position: center;
    }
    74% {
      transform: rotateY(0deg);
      background-position: center;
    }
    75% {
      transform: rotateY(180deg);
      background-position: unset;
    }
    100% {
      transform: rotateY(180deg);
      background-position: unset;
    }
  }

  width: 200px;
  height: 200px;
  background: url('/images/emcia.jpg');
  background-size: cover;
  border-radius: 50%;
  animation: flip_horizontal 4s infinite;

  @keyframes disco {
    0% {
      background: rgba(255, 0, 0, 0.2);
    }
    24% {
      background: rgba(255, 0, 0, 0.2);
    }
    25% {
      background: rgba(255, 255, 0, 0.2);
    }
    49% {
      background: rgba(255, 255, 0, 0.2);
    }
    50% {
      background: rgba(0, 255, 18, 0.2);
    }
    74% {
      background: rgba(0, 255, 18, 0.2);
    }
    75% {
      background: rgba(0, 0, 255, 0.2);
    }
    100% {
      background: rgba(0, 0, 255, 0.2);
    }
  }

  &:after {
    content: '';
    display: block;
    width: 200px;
    height: 200px;
    background: rgba(255, 0, 0, 0.09);
    border-radius: 50%;
    animation: disco 1s infinite;
  }
`;

const Index = () => {
    return <div className={'w-full h-[100vh] bg-red flex flex-col items-center justify-center'}>
        <EmciaDisco/>
    </div>;
};

export default Index;