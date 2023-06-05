'use client';

import React from 'react';

import { BottomContactSection } from 'components/BottomContactSection/BottomContactSection';
import { DribbbleShots } from 'components/DribbleShots/DribbbleShots';
import { ProjectsListView } from 'components/Projects/ProjectsListView';

import { portfolioConfig } from '../../portfolioConfig';

export const ProjectsPage = () => {
    return <div className={'flex flex-col items-center justify-center bg-[#f1f1f1]'}>
        <ProjectsListView {...portfolioConfig.projectsPageConfig.showcaseProjectsConfig} />
        <DribbbleShots {...portfolioConfig.projectsPageConfig.dribbbleShotsConfig} />
        <BottomContactSection/>
    </div>;
};