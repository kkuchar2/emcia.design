import { ISize, useParentSize } from 'hooks/use-size';
import React from 'react';
import styled from 'styled-components';

const StyledFollowMe = styled.div<ISize>`
  width: 100%;
  height: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1e1e1e;
  position: absolute;
  bottom: 0;
  left: 0;
 
  @media (max-width: 430px) {
    height: ${({ width }) => width / 2}px;
  }
`;

interface IconProps {
    src: string;
    altText: string;
    scale?: number;
}

const Icon = (props: IconProps) => {
    const { src, altText, scale } = props;
    return <div className={'flex h-8 w-8 items-center justify-center rounded-full bg-white hover:scale-[1.2] hover:cursor-pointer'} style={{
        transition: 'all .3s cubic-bezier(.77, 0, .175, 1)',
    }}>
        <img src={src} alt={altText} className={'h-8 w-8'} style={{
            transform: `scale(${scale})`,
        }}/>
    </div>;
};

export const FollowMe = () => {

    const ref = React.useRef<HTMLDivElement>(null);

    const parentSize = useParentSize(ref);

    return <StyledFollowMe ref={ref} {...parentSize}>
        <div className={'text-[13px] font-normal text-[#BDBDBD]'}>{'Follow me'}</div>
        <div className={'mt-3 flex gap-4'}>
            <Icon src={'images/dribble.svg'} altText={'dribble'} scale={0.75}/>
            <Icon src={'images/behance.svg'} altText={'behance'} scale={0.75}/>
            <Icon src={'images/linkedin.svg'} altText={'linkedin'} scale={1}/>
        </div>
        <div className={'mt-[50px] flex items-center justify-center gap-1 font-normal text-[#F1F1F1]'}>
            <div className={'text-[12px]'}>{'©'}</div>
            <div className={'text-[11px]'}>{'2022'}</div>
            <div className={'text-[11px]'}>{'Emilia Markiewicz'}</div>
        </div>
    </StyledFollowMe>;
};