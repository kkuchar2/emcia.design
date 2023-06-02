'use client';

import React from 'react';

import { BottomContactSection } from 'components/BottomContactSection/BottomContactSection';
import { Header } from 'components/Header/Header';
import { ProjectsListView } from 'components/Projects/ProjectsListView';
import { SEO } from 'components/SEO/SEO';

import { portfolioConfig } from '../portfolioConfig';

export default function Index() {
    return <>
        <SEO seoKey={'home'}/>
        <Header/>
        <div className={'flex flex-col items-center justify-center bg-[#f1f1f1]'}>
            <ProjectsListView {...portfolioConfig.homePageConfig.selectedProjectsConfig}/>
            <BottomContactSection/>
        </div>
    </>;
};