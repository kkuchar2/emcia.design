import React from 'react';

import { useParentSize } from 'hooks/use-size';
import styled from 'styled-components';

interface ProjectGraphicProps {
    backgroundImagePath?: string;
    logoImagePath?: string;
    ref?: React.RefObject<HTMLDivElement>;
    isVisible?: boolean;
    enteredFirstTime?: boolean;
    intersectionRatio?: number;
    isEven?: boolean;
}

interface StyledSquareProps {
    parentWidth?: number;
    parentHeight?: number;
    isVisible?: boolean;
    enteredFirstTime?: boolean;
    intersectionRatio?: number;
    isEven?: boolean;
}

export const StyledSquare = styled.div<StyledSquareProps>`
  padding: 0;
  width: ${({ parentWidth }: StyledSquareProps) => parentWidth}px;
  height: ${({ parentWidth }: StyledSquareProps) => parentWidth * 0.6}px;
  overflow: hidden;
  //clip-path: circle(var(--ratio) at 50% 50%);;
  // clip-path: ({ enteredFirstTime, isEven }: StyledSquareProps) => {
  //   if (enteredFirstTime) {
  //     return isEven ? 'circle(100% at 40% 40%)' : 'circle(100% at 60% 40%)';
  //   }
  //   return isEven ? 'circle(0% at 40% 40%)' : 'circle(0% at 60% 40%)';
  // }};
  transform: ${({ enteredFirstTime }: StyledSquareProps) => enteredFirstTime ? 'translateY(0)' : 'translateY(300px)'};
  transition: transform 2200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  width: ${({ parentWidth }: StyledSquareProps) => parentWidth * 0.5}px;
  height: ${({ parentWidth }: StyledSquareProps) => parentWidth * 0.5 * 0.75}px;
`;

const StyledImage = styled.img<StyledSquareProps>`
  height: 100%;
  width: 100%;
  min-width: 0;
  object-fit: cover;
`;

export const ProjectGraphic = (props: ProjectGraphicProps) => {
    const { backgroundImagePath, logoImagePath, isVisible, enteredFirstTime, intersectionRatio, isEven } = props;

    const ref = React.useRef<HTMLDivElement>(null);

    const parentSize = useParentSize(ref);

    return <StyledSquare className={'relative min-w-0'}
                         parentWidth={parentSize.width}
                         parentHeight={parentSize.height}
                         isVisible={isVisible}
                         isEven={isEven}
                         enteredFirstTime={enteredFirstTime}
                         ref={ref}>
        <StyledImage src={backgroundImagePath}/>
        <img src={logoImagePath} className={'absolute top-[50%] left-[50%] w-[140px] -translate-x-1/2 -translate-y-1/2'}/>
    </StyledSquare>;
};