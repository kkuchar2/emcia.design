import React, { useMemo } from 'react';

import { IExperienceItem } from '../../portfolioConfig.types';

import styles from './ExperienceItem.module.scss';

export const ExperienceItem = (props: IExperienceItem) => {
    const { startDate, endDate, title, company, duties } = props;

    const dutiesList = useMemo(() => {
        return duties.map((duty, index) => {
            return <div key={index} className={'flex items-start gap-2'}>
                <div className={styles.dot}>{'•'}</div>
                <div className={styles.duty}>{duty}</div>
            </div>;
        });
    }, [duties]);

    return <div className={styles.experienceItem}>
        <div>
            <div className={styles.desktopDate}>
                <div>{startDate}</div>
                <div>{'-'}</div>
                <div>{endDate}</div>
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.jobTitle}>{title}</div>
            <div className={styles.company}>{company}</div>
            <div className={styles.mobileDate}>
                <div>{startDate}</div>
                <div>{'-'}</div>
                <div>{endDate}</div>
            </div>
            <div className={'mt-[30px] flex flex-col gap-2 text-sm text-[#807F7F]'}>
                <div className={'flex flex-col gap-2'}>
                    {dutiesList}
                </div>
            </div>
        </div>
    </div>;
};