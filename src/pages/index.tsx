import React from 'react';

import { BottomContactSection } from 'components/BottomContactSection/BottomContactSection';
import { Header } from 'components/Header/Header';
import { ProjectsListView } from 'components/Projects/ProjectsListView';

import { portfolioConfig } from '../portfolioConfig';

const Index = () => {
    return <>
        <Header/>
        <div className={'flex flex-col items-center justify-center bg-white'}>
            <ProjectsListView {...portfolioConfig.homePageConfig.selectedProjectsConfig}/>
            <BottomContactSection/>
        </div>
    </>;
};

export default Index;
