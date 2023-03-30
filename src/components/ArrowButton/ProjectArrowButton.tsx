import React from 'react';

import { ArrowButtonProps } from 'components/ArrowButton/ArrowButton.types';
import styled from 'styled-components';

const StyledProjectArrowButton = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  min-width: max-content;
  color: #1e1e1e;
  transition: all 0.8s cubic-bezier(0.275, 0.82, 0.165, 1);
`;

const Arrow = styled.img`
  width: 60px;
  z-index: 1;
  padding-left: 10px;
  padding-right: 20px;
  transition: all 0.5s ease;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const StyledViewProjectButton = styled.a`
  cursor: pointer;
  margin: 0;
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: all .5s cubic-bezier(.77, 0, .175, 1);
  display: flex;
  gap: 0.5rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 3rem;
  padding-left: 20px;
  padding-right: 20px;

  :before {
    content: '';
    position: absolute;
    top: -50%;
    height: 3rem;
    transition: all 0.8s cubic-bezier(0.275, 0.82, 0.165, 1);
    transform: translateY(50%);
    left: 0;
    width: 100%;
    background: rgba(189, 189, 189, 0.4);
    border-radius: calc(3rem / 2);

    @media (min-width: 1024px) {
      width: 3rem;
      background: #BDBDBD;
    }
  }

  &:hover {
    :before {
      background: rgba(189, 189, 189, 0.78);
    }
  }
}

@media (min-width: 1024px) {

  padding-left: 20px;
  padding-right: 0;

  &:hover {
    width: 100%;

    ${Text} {
      transform: translateX(10px);
    }

    ${Arrow} {
      transform: translateX(15px);
    }

    :before {
      width: 100%;
      background: rgba(189, 189, 189, 0.4);
    }
  }
`;

export const ProjectArrowButton = (props: ArrowButtonProps) => {

    const { text, image } = props;

    return <StyledProjectArrowButton>
        <StyledViewProjectButton href={'/'}>
            <Text>{text}</Text>
            <Arrow src={image} alt={'arrow'}/>
        </StyledViewProjectButton>
    </StyledProjectArrowButton>;
};
