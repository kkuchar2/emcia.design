import React from 'react';

import { IEducationItem } from '../../portfolioConfig.types';

import styles from './EducationItem.module.scss';

export const EducationItem = (props: IEducationItem) => {
    const { startDate, endDate, title, school } = props;

    return <div className={styles.educationItem}>
        <div>
            <div className={styles.desktopDate}>
                <div>{startDate}</div>
                <div>{'-'}</div>
                <div>{endDate}</div>
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.title}>{title}</div>
            <div className={styles.school}>{school}</div>
            <div className={styles.mobileDate}>
                <div>{startDate}</div>
                <div>{'-'}</div>
                <div>{endDate}</div>
            </div>
        </div>
    </div>;
};