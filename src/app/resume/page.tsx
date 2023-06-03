import React from 'react';

import { ResumePage } from 'components/pages/ResumePage';
import { SEO } from 'components/SEO/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resume | Portfolio',
};

export default function Resume() {
    return <>
        <SEO seoKey={'resume'}/>
        <ResumePage/>
    </>;
}
