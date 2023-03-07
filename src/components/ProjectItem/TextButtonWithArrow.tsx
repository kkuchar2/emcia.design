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
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  transition: all 1.5s cubic-bezier(.77, 0, .175, 1);
  min-height: 3rem;
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

interface StyledViewProjectButtonWrapperProps {
    width: number;
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
    image: string;
}

export const TextButtonWithArrow = (props: TextButtonWithArrowProps) => {

    const { text, textColor, circleColor, image, width } = props;

    return <StyledViewProjectButtonWrapper width={width || 200}>
        <StyledViewProjectButton href={'/'} circleColor={circleColor}>
            <StyledText color={textColor}>
                {text}
            </StyledText>
            <StyledArrow src={image} alt={'arrow'}/>
        </StyledViewProjectButton>
    </StyledViewProjectButtonWrapper>;
};
