import React from 'react';

import { HomePage } from 'components/pages/HomePage';
import { SEO } from 'components/SEO/SEO';

export default function Index() {
    return <>
        <SEO seoKey={'home'}/>
        <HomePage/>
    </>;
};