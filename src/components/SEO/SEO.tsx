import React from 'react';

import { DefaultSeo } from 'next-seo';

import { seoConfig } from '../../../next-seo.config';

interface SeoProps {
    seoKey: string;
}

export const SEO = (props: SeoProps) => {

    const { seoKey } = props;

    if (!seoKey) {
        return null;
    }

    const config = seoConfig.pages[seoKey];

    if (!config) {
        return null;
    }

    // Common meta tags for all pages
    let commonMeta = seoConfig.common || {};

    // Merge common meta with page specific meta
    const meta = config.meta = {
        ...commonMeta,
        ...config.meta || {},
    };

    return <>
        {config.meta && <DefaultSeo {...meta} />}

        {config.jsonLd && config.jsonLd.map((config, index) => {
            const { component: LdJsonComponent, props } = config;
            return <LdJsonComponent key={index} {...props} />;
        })}
    </>;
};