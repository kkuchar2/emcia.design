import React from 'react';

import { ArrowButtonProps } from 'components/ArrowButton/ArrowButton.types';
import styled from 'styled-components';

const StyledProjectArrowButton = styled.div`
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  overflow: hidden;
  margin-top: 20px;
`;

const StyledViewProjectButton = styled.a`
  cursor: pointer;
  margin: 0;
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: all .5s cubic-bezier(.77, 0, .175, 1);
  display: flex;
  z-index: 1;
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
    box-sizing: border-box;
    transform: translateY(50%);
    left: 0;
    width: 100%;
    background: rgba(189, 189, 189, 0.4);
    border-radius: calc(3rem / 2);

    @media (min-width: 768px) {
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

@media (min-width: 768px) {

  padding-left: 20px;
  padding-right: 0;

  &:hover {
    width: 100%;

    :before {
      width: 100%;
      background: rgba(189, 189, 189, 0.4);
      border-radius: calc(2.5rem / 2);
    }
  }
}
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
`;

const Arrow = styled.img`
  width: 60px;
  z-index: 1;
  padding-left: 10px;
  padding-right: 20px;
  transition: all 0.5s ease;
  display: none;

  @media (min-width: 768px) {
    display: block;
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
