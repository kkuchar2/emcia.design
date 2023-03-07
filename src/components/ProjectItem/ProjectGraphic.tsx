import { useParentSize } from 'hooks/use-size';
import React from 'react';
import styled from 'styled-components';

interface ProjectGraphicProps {
    backgroundImagePath?: string;
    logoImagePath?: string;
}

interface StyledSquareProps {
    parentWidth: number;
}

const StyledSquare = styled.div`
  width: ${({ parentWidth }: StyledSquareProps) => parentWidth}px;
  height: ${({ parentWidth }: StyledSquareProps) => parentWidth * 0.6}px;

 
  @media (min-width: 768px) {
    width: ${({ parentWidth }: StyledSquareProps) => parentWidth * 0.5}px;
    height: ${({ parentWidth }: StyledSquareProps) => parentWidth * 0.5 * 0.75}px;
  }
`;

export const ProjectGraphic = (props: ProjectGraphicProps) => {
    const { backgroundImagePath, logoImagePath } = props;

    const ref = React.useRef<HTMLDivElement>(null);

    const parentSize = useParentSize(ref);

    return <StyledSquare className={'relative min-w-0 bg-red-300'} parentWidth={parentSize.width} ref={ref}>
        <img src={backgroundImagePath} className={'h-full w-full min-w-0 object-cover'}/>
        <img src={logoImagePath} className={'absolute top-[50%] left-[50%] w-[140px] -translate-x-1/2 -translate-y-1/2'}/>
    </StyledSquare>;
};