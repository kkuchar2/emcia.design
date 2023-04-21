import React from 'react';

import { ArrowButtonProps } from 'components/ArrowButton/ArrowButton.types';
import styled from 'styled-components';

const transition = 'all 0.8s cubic-bezier(0.275, 0.82, 0.165, 1)';
const mobileTransition = 'all 0.3s ease';
const arrowTransition = 'all 0.5s ease';
const circleDiameter = '3rem';

const Text = styled.div`
  z-index: 1;
  font-size: 1rem;
  font-weight: 600;
  display: grid;
  place-items: center;
  color: #F1F1F1;
  transition: ${transition};
`;

const Arrow = styled.img`
  z-index: 1;
  padding-left: 10px;
  padding-right: 20px;
  transition: ${arrowTransition};
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const ArrowLink = styled.a`
  height: ${circleDiameter};
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  -webkit-tap-highlight-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
  transition: ${transition};

  &:before, &:after {
    content: '';
    position: absolute;
    height: ${circleDiameter};
    top: -50%;
    left: 0;
    transform: translateY(50%);
    border-radius: calc(${circleDiameter} / 2);
    transition: ${mobileTransition};
    width: 100%;

    @media (min-width: 768px) {
      transition: ${transition};
      width: ${circleDiameter};
    }
  }

  &:before {
    background: rgba(216, 216, 216, 0.15);
    opacity: 1;

    @media (min-width: 768px) {
      background: #595959;
    }
  }

  &:after {
    background: #4d4d4d;
    opacity: 0;

    @media (min-width: 768px) {
      background: linear-gradient(90deg, #282828, rgba(89, 89, 89, 0.49));
    }
  }

  &:hover {
    &:before {
      opacity: 0;
    }

    &:after {
      opacity: 1;
    }

    @media (min-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;

      ${Text} {
        transform: translateX(10px);
      }

      ${Arrow} {
        transform: translateX(15px);
      }

      &:before, &:after {
        width: 100%;
      }
    }
  }
`;

export const HeaderArrowButton = (props: ArrowButtonProps) => {

    const { text, image } = props;

    return <ArrowLink href={'/projects'}>
        <Text>{text}</Text>
        <Arrow src={image} alt={'arrow'} width={60} height={0}/>
    </ArrowLink>;
};
