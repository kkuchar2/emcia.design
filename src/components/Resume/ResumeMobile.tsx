import React from 'react';

import { BottomResumeSection } from 'components/BottomResumeSection/BottomResumeSection';
import { Education } from 'components/Resume/Education';
import { Experience } from 'components/Resume/Experience';

import styles from './ResumeMobile.module.scss';

export const ResumeMobile = () => {
    return <div className={styles.resume}>
        <div className={styles.topCircle}>
            <div className={'absolute bottom-[80px] flex flex-col gap-2 mix-blend-difference'}>
                <div className={styles.title}>{'resume'}</div>
                <div className={styles.titleHelloMessage}>
                    <div>{'My previous professional experience'}</div>
                    <div>{'is presented below'}</div>
                </div>
            </div>
        </div>
        <div className={'h-[100px] w-full bg-[#f1f1f1]'}/>
        <div className={styles.fakeCircleBlock}/>
        <div className={'flex flex-col items-center justify-center bg-[#f1f1f1]'}>
            <Experience/>
            <Education/>
        </div>
        <BottomResumeSection/>
    </div>;
};