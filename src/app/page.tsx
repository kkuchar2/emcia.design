import React from 'react';

import { HomePage } from 'components/pages/HomePage';
import { SEO } from 'components/SEO/SEO';
import { Metadata } from 'next';

import { seoConfig } from '../../next-seo.config';

export const metadata: Metadata = { ...seoConfig.pages['home'].meta };

export default function Index() {
    return <>
        <SEO seoKey={'home'}/>
        <HomePage/>
    </>;
};