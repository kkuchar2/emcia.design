import React from 'react';

import Link from 'next/link';

import { ISocialItem } from '../../portfolioConfig.types';

export const SocialLink = (socialItem: ISocialItem) => {
    const { link, icon } = socialItem;

    const { twStyle, width, height, component: SVGComponent } = icon;

    return <Link className={'flex items-center justify-center rounded-full bg-[#F1F1F1] hover:scale-[120%] transition-scale ease-in-out duration-200 ' + twStyle}
        {...link}>
        <SVGComponent width={width} height={height}/>
    </Link>;
};