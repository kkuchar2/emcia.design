import React from 'react';

import Script from 'next/script';

import {JsonLd, seoConfig} from '../../../next-seo.config';

interface SeoProps {
    seoKey: string;
}

export const SEO = (props: SeoProps) => {

    const {seoKey} = props;

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
        {config.jsonLd && config.jsonLd.map((jsonLd: JsonLd, index: number) => {
            return <Script
                key={index}
                id={'app-ld-json'}
                type={'application/ld+json'}
                strategy={'beforeInteractive'}
                dangerouslySetInnerHTML={jsonLd}
            />;
        })}
    </>;
};