import { ISize, useParentSize } from 'hooks/use-size';
import React from 'react';
import styled from 'styled-components';

const StyledSocialMedia = styled.div<ISize>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

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
    return <div className={'flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-[1.2] hover:cursor-pointer'} style={{
        transition: 'all .2s ease',
    }}>
        <img src={src} alt={altText} className={'h-10 w-10'} style={{
            transform: `scale(${scale})`,
        }}/>
    </div>;
};

interface SocialMediaProps {
    title?: string;
}

export const SocialMedia = (props: SocialMediaProps) => {

    const { title = 'Follow me' } = props;

    const ref = React.useRef<HTMLDivElement>(null);

    const parentSize = useParentSize(ref);

    return <StyledSocialMedia ref={ref} {...parentSize}>
        {title && <div className={'text-[15px] font-normal text-[#BDBDBD]'}>
            {title}
        </div>}
        <div className={'mt-3 flex gap-5'}>
            <Icon src={'images/dribble.svg'} altText={'dribble'} scale={0.75}/>
            <Icon src={'images/behance.svg'} altText={'behance'} scale={0.75}/>
            <Icon src={'images/linkedin.svg'} altText={'linkedin'} scale={1}/>
        </div>
    </StyledSocialMedia>;
};