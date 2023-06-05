import React from 'react';

import { SocialLink } from 'components/SocialMedia/SocialLink';
import { ISize, useParentSize } from 'hooks/use-size';
import styled from 'styled-components';

import { portfolioConfig } from '../../portfolioConfig';

import styles from './SocialMedia.module.scss';

const StyledSocialMedia = styled.div<ISize>`
  @media (max-width: 430px) {
    height: ${({ width }) => width / 2}px;
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

    return <StyledSocialMedia className={styles.socialMedia} ref={ref} {...parentSize}>
        {title && <div className={'text-sm font-normal text-[#BDBDBD]'}>
            {title}
        </div>}
        <div className={'flex gap-8 p-2'}>
            <SocialLink {...socialConfig.dribbble} />
            <SocialLink {...socialConfig.behance} />
            <SocialLink {...socialConfig.linkedin} />
        </div>
    </StyledSocialMedia>;
};