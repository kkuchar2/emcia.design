import React from 'react';

import { BottomContactSection } from 'components/BottomContactSection/BottomContactSection';
import { Header } from 'components/Header/Header';
import { ProjectsListView } from 'components/Projects/ProjectsListView';
import { GetStaticProps } from 'next';

import { portfolioConfig } from '../portfolioConfig';

import { PageProps } from './_app';

export default function Index() {

    return <>
        <Header/>
        <div className={'flex flex-col items-center justify-center bg-[#f1f1f1]'}>
            <ProjectsListView {...portfolioConfig.homePageConfig.selectedProjectsConfig}/>
            <BottomContactSection/>
        </div>
    </>;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    return {
        props: {
            seoKey: 'home',
        },
    };
};
