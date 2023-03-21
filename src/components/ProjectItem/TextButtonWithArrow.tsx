import React, { useRef } from 'react';

import useIntersectionObserver from 'hooks/use-intersection';
import styled from 'styled-components';

interface VisibleProps {
    visible: boolean;
}

interface StyledViewProjectButtonProps extends VisibleProps {
    circleColor: string;
    hoverBgColor?: string;
    hoverBorderColor?: string;
}

interface StyledViewProjectButtonWrapperProps extends VisibleProps {
    width: number;
    delay?: number;
}

interface StyledTextProps extends VisibleProps {
    color: string;
}

interface WrapperProps {
    position?: string;
}

const StyledArrow = styled.img<VisibleProps>`
  width: 40px;
  z-index: 1;
  margin-left: 10px;
  transition: all 0.5s ease;
  display: block;
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

const StyledViewProjectButtonWrapper = styled.div<StyledViewProjectButtonWrapperProps>`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  min-height: 3rem;
  overflow: hidden;
`;

const StyledViewProjectButton = styled.a<StyledViewProjectButtonProps>`
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

  :before {
    content: '';
    position: absolute;
    top: -50%;
    height: 3rem;
    transition: all 0.8s cubic-bezier(0.275, 0.82, 0.165, 1);
    box-sizing: border-box;
    transform: ${({ visible }) => 'translateY(50%) scale(' + (visible ? 1 : 0) + ')'};
    left: 0;
    width: 3rem;
    background-color: ${({ circleColor }) => circleColor};
    border-color: transparent;
    border-radius: calc(3rem / 2);
  }

  ${StyledArrow} {
    transform: ${({ visible }) => 'translateX(' + (visible ? 0 : -30) + 'px)'};
  }

  &:hover {
    width: 100%;

    ${StyledArrow} {
      transform: translateX(10px);
    }

    :before {
      width: 100%;
      background: ${({ hoverBgColor }) => hoverBgColor};
      border-radius: calc(2.5rem / 2);
      border: ${({ hoverBorderColor }) => hoverBorderColor ? '1px solid ' + hoverBorderColor : 'none'};
    }
  }
`;

const Wrapper = styled.div<WrapperProps>`
  position: ${props => props.position ?? 'absolute'};
  bottom: 0;
  line-height: normal;
`;

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
  opacity: ${({ visible }) => visible ? 1 : 0};
  transform: ${({ visible }) => 'translateX(' + (visible ? 0 : -60) + 'px)'};
  transition: all 0.8s ease;
`;

interface TextButtonWithArrowProps {
    width?: number;
    text: string;
    textColor: string;
    circleColor: string;
    hoverBgColor?: string;
    arrowColor?: string;
    hoverBorderColor?: string;
    image: string;
    position?: string;
    delay?: number;
}

export const TextButtonWithArrow = (props: TextButtonWithArrowProps) => {

    const { text, textColor, circleColor, hoverBgColor, hoverBorderColor, image, width, position, delay = 0 } = props;

    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    return <Wrapper position={position} ref={ref}>
        <StyledViewProjectButtonWrapper width={width || 200} delay={delay} visible={isVisible}>
            <StyledViewProjectButton href={'/'} circleColor={circleColor} hoverBgColor={hoverBgColor}
                                     hoverBorderColor={hoverBorderColor}
                                     visible={isVisible}>
                <StyledText color={textColor} visible={isVisible}>
                    {text}
                </StyledText>
                <StyledArrow src={image} alt={'arrow'} visible={isVisible}/>
            </StyledViewProjectButton>
        </StyledViewProjectButtonWrapper>
    </Wrapper>;
};
