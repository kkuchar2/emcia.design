import React from 'react';

import styled from 'styled-components';

const StyledArrow = styled.img`
  width: 40px;
  z-index: 1;
  margin-left: 10px;
  transition: all .5s cubic-bezier(.77, 0, .175, 1);
  display: block;
`;

interface StyledViewProjectButtonProps {
    circleColor: string;
}

const StyledViewProjectButtonWrapper = styled.div<StyledViewProjectButtonWrapperProps>`
  position: ${props => props.position ?? 'absolute'};
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  min-height: 3rem;
  overflow: hidden;
  transform: ${({ animate, useAnimation }) => {
    if (!useAnimation) {
      return 'translateY(0px)';
    }

    return animate ? 'translateY(0)' : 'translateY(200px)';
  }};
  transition: transform 2s cubic-bezier(0.175, 0.67, 0.3, 0.97) ${({ delay }) => delay || 0}s;
`;

const StyledViewProjectButton = styled.a<StyledViewProjectButtonProps>`
  color: #000000;
  cursor: pointer;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  transition: all .5s cubic-bezier(.77, 0, .175, 1);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  gap: 0.5rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);


  :before {
    content: '';
    position: absolute;
    top: -50%;
    height: 3rem;
    transition: all 1500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    box-sizing: border-box;
    transform: translateY(50%);
    left: 0;
    width: 3rem;
    background-color: ${props => props.circleColor};
    border-radius: calc(3rem / 2);
  }

  &:hover {
    width: 100%;

    :before {
      width: 100%;
    }
  }
`;

interface AnimateProps {
    delay?: number;
    width: number;
    position?: string;
}

const AnimateWrapper = styled.div<AnimateProps>`
  position: ${props => props.position ?? 'absolute'};
  bottom: 0;
  line-height: normal;
`;

interface StyledViewProjectButtonWrapperProps {
    width: number;
    position?: string;
    animate?: boolean;
    delay?: number;
    useAnimation?: boolean;
    intersectionRatio?: number;
}

interface StyledTextProps {
    color: string;
}

const StyledText = styled.div<StyledTextProps>`
  font-size: 16px;
  font-weight: 600;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  min-width: max-content;
  color: ${(props) => props.color};
  transition: all .5s cubic-bezier(.77, 0, .175, 1);
`;

interface TextButtonWithArrowProps {
    width?: number;
    text: string;
    textColor: string;
    circleColor: string;
    arrowColor?: string;
    image: string;
    position?: string;
    animate?: boolean;
    useAnimation?: boolean;
    intersectionRatio?: number;
    delay?: number;
}

export const TextButtonWithArrow = (props: TextButtonWithArrowProps) => {

    const { text, textColor, circleColor, arrowColor, image, width, position, animate = false, useAnimation = false, delay = 0, intersectionRatio } = props;

    return <AnimateWrapper width={width || 200} position={position}>
        <StyledViewProjectButtonWrapper width={width || 200} position={position} animate={animate} useAnimation={useAnimation} delay={delay} intersectionRatio={intersectionRatio}>
            <StyledViewProjectButton href={'/'} circleColor={circleColor}>
                <StyledText color={textColor}>
                    {text}
                </StyledText>
                <StyledArrow src={image} alt={'arrow'}/>
            </StyledViewProjectButton>
        </StyledViewProjectButtonWrapper>
    </AnimateWrapper>;
};
