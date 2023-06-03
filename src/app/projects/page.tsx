import React from 'react';

import { ProjectsPage } from 'components/pages/ProjectsPage';
import { SEO } from 'components/SEO/SEO';

export default function Projects() {
    return <>
        <SEO seoKey={'projects'}/>
        <ProjectsPage/>
    </>;
}