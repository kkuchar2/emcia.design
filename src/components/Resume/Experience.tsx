import React from 'react';

import { ExperienceItem } from 'components/Resume/ExperienceItem';

import { portfolioConfig } from '../../portfolioConfig';

import styles from './Experience.module.scss';

export const Experience = () => {

    const exp = portfolioConfig.experience;

    return <div className={styles.experience}>
        <div className={'flex w-full max-w-[1500px] flex-col gap-[60px] px-[40px] md:mt-[50px]'}>
            <div className={'flex flex-col gap-2 self-start'}>
                <div className={styles.title}>{'Experience'}</div>
                <div className={styles.description}>{'I have worked for the following companies so far:'}</div>
            </div>
            <div className={styles.items}>
                {exp.map((item, index) => <ExperienceItem key={index} {...item}/>)}
            </div>
        </div>
    </div>;
};