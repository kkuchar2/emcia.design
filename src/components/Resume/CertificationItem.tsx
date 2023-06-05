import React from 'react';

import { ICertificationItem } from '../../portfolioConfig.types';

import styles from './CertificationItem.module.scss';

export const CertificationItem = (props: ICertificationItem) => {
    const { title, name, date } = props;

    return <div className={styles.certificationItem}>
        <div>
            <div className={styles.desktopDate}>{date}</div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.title}>{title}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.mobileDate}>{date}</div>
        </div>
    </div>;
};