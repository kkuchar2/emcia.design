'use client';

import React from 'react';

import { BottomContactSection } from 'components/BottomContactSection/BottomContactSection';
import { DribbbleShotsView } from 'components/Projects/DribbbleShotsView';
import { ProjectsListView } from 'components/Projects/ProjectsListView';

import { portfolioConfig } from '../../portfolioConfig';

export default function Projects() {
    return <div className={'flex flex-col items-center justify-center bg-[#f1f1f1]'}>
        <ProjectsListView {...portfolioConfig.projectsPageConfig.showcaseProjectsConfig} />
        <DribbbleShotsView {...portfolioConfig.projectsPageConfig.dribbbleShotsConfig} />
        <BottomContactSection/>
    </div>;
}