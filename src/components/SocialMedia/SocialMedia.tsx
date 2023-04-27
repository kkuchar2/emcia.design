import React from 'react';

import { SocialLink } from 'components/SocialMedia/SocialLink';
import { ISize, useParentSize } from 'hooks/use-size';
import styled from 'styled-components';

import { portfolioConfig } from '../../portfolioConfig';

const StyledSocialMedia = styled.div<ISize>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 430px) {
    height: ${({ width }) => width / 2}px;
  }

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

interface SocialMediaProps {
    title?: string;
}

export const SocialMedia = (props: SocialMediaProps) => {

    const { title = 'Follow me' } = props;

    const socialConfig = portfolioConfig.socialConfig;

    const ref = React.useRef<HTMLDivElement>(null);

    const parentSize = useParentSize(ref);

    return <StyledSocialMedia ref={ref} {...parentSize}>
        {title && <div className={'text-sm font-normal text-[#BDBDBD]'}>
            {title}
        </div>}
        <div className={'flex gap-4'}>
            <SocialLink {...socialConfig.dribble} />
            <SocialLink {...socialConfig.behance} />
            <SocialLink {...socialConfig.linkedin} />
        </div>
    </StyledSocialMedia>;
};