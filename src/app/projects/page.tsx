import React from 'react';

import { ProjectsPage } from 'components/pages/ProjectsPage';
import { SEO } from 'components/SEO/SEO';
import { Metadata } from 'next';

import { getPageMetadata } from '../../../next-seo.config';

export const metadata: Metadata = { ...getPageMetadata('projects') };

export default function Projects() {
    return <>
        <SEO seoKey={'projects'}/>
        <ProjectsPage/>
    </>;
}