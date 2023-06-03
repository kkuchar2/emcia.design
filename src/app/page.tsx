import React from 'react';

import { HomePage } from 'components/pages/HomePage';
import { SEO } from 'components/SEO/SEO';
import { Metadata } from 'next';

import { getPageMetadata } from '../../next-seo.config';

export const metadata: Metadata = { ...getPageMetadata('home') };

export default function Index() {
    return <>
        <SEO seoKey={'home'}/>
        <HomePage/>
    </>;
};