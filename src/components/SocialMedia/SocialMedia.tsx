import React, { useCallback } from 'react';

import { ISize, useParentSize } from 'hooks/use-size';
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

const StyledIcon = styled.div`
  display: flex;
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ffffff;
  transition: all .2s ease;
  
  @media (min-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  padding: 10px;

  &:hover {

    ${StyledIcon} {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;

const Icon = (props: IconProps) => {
    const { src, altText, scale } = props;
    return <StyledIcon>
        <img src={src} alt={altText} className={'h-10 w-10'} style={{
            transform: `scale(${scale})`,
        }}/>
    </StyledIcon>;
};

interface SocialMediaProps {
    title?: string;
}

export const SocialMedia = (props: SocialMediaProps) => {

    const { title = 'Follow me' } = props;

    const ref = React.useRef<HTMLDivElement>(null);

    const parentSize = useParentSize(ref);

    const onClick = useCallback(() => {
        console.log('click');
    }, []);

    return <StyledSocialMedia ref={ref} {...parentSize}>
        {title && <div className={'text-[15px] font-normal text-[#BDBDBD]'}>
            {title}
        </div>}
        <div className={'mt-3 flex gap-4'}>
            <StyledButton onClick={onClick}>
                <Icon src={'images/dribble.svg'} altText={'dribble'} scale={0.75}/>
            </StyledButton>
            <StyledButton>
                <Icon src={'images/behance.svg'} altText={'behance'} scale={0.75}/>
            </StyledButton>
            <StyledButton>
                <Icon src={'images/linkedin.svg'} altText={'linkedin'} scale={1}/>
            </StyledButton>
        </div>
    </StyledSocialMedia>;
};