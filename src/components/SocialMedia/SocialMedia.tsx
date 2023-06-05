import React from 'react';

import { SocialLink } from 'components/SocialMedia/SocialLink';
import { useParentSize } from 'hooks/use-size';

import { portfolioConfig } from '../../portfolioConfig';

import styles from './SocialMedia.module.scss';

interface SocialMediaProps {
    title?: string;
}

export const SocialMedia = (props: SocialMediaProps) => {

    const { title = 'Follow me' } = props;

    const socialConfig = portfolioConfig.socialConfig;

    const ref = React.useRef<HTMLDivElement>(null);

    const parentSize = useParentSize(ref);

    return <div className={styles.socialMedia} ref={ref}{...parentSize}>
        {title && <div className={'text-sm font-normal text-[#BDBDBD]'}>
            {title}
        </div>}
        <div className={'flex gap-8 p-2'}>
            <SocialLink {...socialConfig.dribbble} />
            <SocialLink {...socialConfig.behance} />
            <SocialLink {...socialConfig.linkedin} />
        </div>
    </div>;
};