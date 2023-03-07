import { ProjectItem } from 'components/ProjectItem/ProjectItem';
import React from 'react';

import { projectConfig } from '../../projectConfig';

export const Section = () => {

    const { projectsPageConfig } = projectConfig;

    const { selectedProjectsTitle, selectedProjectsDescription, projects } = projectsPageConfig;

    return <section className={'mt-[80px] flex w-full flex-col flex-wrap items-center  gap-[80px] md:mt-[160px] md:justify-center md:gap-[160px]'}>

        <div className={'flex w-full flex-col justify-center pl-[20px] sm:pl-[40px]'}>
            <div className={'text-2xl font-semibold md:text-4xl md:font-bold'}>
                {selectedProjectsTitle}
            </div>
            <div className={'mt-3 text-xl font-normal text-[#807F7F]'}>
                {selectedProjectsDescription}
            </div>
        </div>

        <div className={'flex w-full flex-col gap-[160px]'}>
            {projects.map((project, index) => {
                return <ProjectItem key={index} project={project} idx={index}/>;
            })}
        </div>
    </section>;
};
