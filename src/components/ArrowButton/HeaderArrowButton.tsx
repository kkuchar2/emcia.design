import React from 'react';

import { ArrowButtonProps } from 'components/ArrowButton/ArrowButton.types';
import styled from 'styled-components';

const StyledHeaderArrowButton = styled.div`
  position: relative;
  bottom: 0;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  overflow: hidden;
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
  color: #F1F1F1;
  transition: all 0.8s cubic-bezier(0.275, 0.82, 0.165, 1);
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

const StyledViewProjectButton = styled.a`
  cursor: pointer;
  margin: 0;
  width: 100%;
  text-align: center;
  text-decoration: none;
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
    box-sizing: border-box;
    transform: translateY(50%);
    left: 0;
    width: 100%;
    background: rgba(216, 216, 216, 0.15);
    border-radius: calc(3rem / 2);
    opacity: 1;

    @media (min-width: 768px) {
      width: 3rem;
      background: #595959;
    }
  }

  :after {
    content: '';
    position: absolute;
    top: -50%;
    height: 3rem;
    transition: all 0.8s cubic-bezier(0.275, 0.82, 0.165, 1);
    box-sizing: border-box;
    transform: translateY(50%);
    left: 0;
    width: 100%;
    opacity: 0;
    border-radius: calc(3rem / 2);
    background: linear-gradient(90deg, #282828, rgba(89, 89, 89, 0.49));

    @media (min-width: 768px) {
      width: 3rem;
      background: linear-gradient(90deg, #282828, rgba(89, 89, 89, 0.49));
    }
  }

  &:hover {
    @media (min-width: 768px) {
      padding-left: 20px;
      padding-right: 15px;

      ${Text} {
        transform: translateX(10px);
      }

      ${Arrow} {
        transform: translateX(15px);
      }

      &:before {
        width: 100%;
      }

      &:after {
        width: 100%;
      }
    }

    &:before {
      opacity: 0;
    }

    &:after {
      opacity: 1;
    }
  }
`;

export const HeaderArrowButton = (props: ArrowButtonProps) => {

    const { text, image } = props;

    return <StyledHeaderArrowButton>
        <StyledViewProjectButton href={'/'}>
            <Text>{text}</Text>
            <Arrow src={image} alt={'arrow'}/>
        </StyledViewProjectButton>
    </StyledHeaderArrowButton>;
};
