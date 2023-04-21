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
  color: #1e1e1e;
  max-width: 200px;
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

  &:before {
    content: '';
    position: absolute;
    height: ${circleDiameter};
    top: -50%;
    left: 0;
    transform: translateY(50%);
    border-radius: calc(${circleDiameter} / 2);
    transition: ${mobileTransition};
    width: 100%;
    background: rgba(216, 216, 216, 0.35);

    @media (min-width: 768px) {
      transition: ${transition};
      width: ${circleDiameter};
      background: rgb(216, 216, 216);
    }
  }

  &:hover {
    &:before {
      background: rgb(216, 216, 216);
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

      &:before {
        width: 100%;
      }
    }
  }
`;

export const ProjectArrowButton = (props: ArrowButtonProps) => {

    const { text, image, href } = props;

    return <ArrowLink href={href} target={'_blank'}>
        <Text>{text}</Text>
        <Arrow src={image} alt={'arrow'} width={60} height={0}/>
    </ArrowLink>;
};
