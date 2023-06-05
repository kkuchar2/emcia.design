import React from 'react';

import { ProjectItem } from 'components/Projects/ProjectItem';

import { ShowcaseProjectsConfig } from '../../portfolioConfig.types';

import styles from './ProjectListView.module.scss';

export const ProjectsListView = (props: ShowcaseProjectsConfig) => {

    const { title, secondaryTitle, projects } = props;

    return <div className={styles.projectList}>
        <div className={styles.titlesWrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.secondaryTitle}>{secondaryTitle}</div>
        </div>
        <div className={styles.items}>
            {projects.map((project, index) => <ProjectItem key={index} project={project}/>)}
        </div>
    </div>;
};
