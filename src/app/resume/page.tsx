import React from 'react';

import { ResumePage } from 'components/pages/ResumePage';
import { SEO } from 'components/SEO/SEO';
import { Metadata } from 'next';

import { getPageMetadata } from '../../../next-seo.config';

export const metadata: Metadata = { ...getPageMetadata('resume') };

export default function Resume() {
    return <>
        <SEO seoKey={'resume'}/>
        <ResumePage/>
    </>;
}
