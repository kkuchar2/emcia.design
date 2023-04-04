import React from 'react';

import { BottomContactSection } from 'components/BottomContactSection/BottomContactSection';
import { DribbleShotsView } from 'components/Projects/DribbleShotsView';
import { ProjectsListView } from 'components/Projects/ProjectsListView';

import { portfolioConfig } from '../portfolioConfig';

export default function Projects() {
    return <>
        <div className={'flex flex-col items-center justify-center bg-[#f1f1f1]'}>
            <ProjectsListView {...portfolioConfig.projectsPageConfig.showcaseProjectsConfig} />
            <DribbleShotsView {...portfolioConfig.projectsPageConfig.dribbleShotsConfig} />
            <BottomContactSection/>
        </div>
    </>;
}