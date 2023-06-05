import React from 'react';

import styles from './MadeBy.module.scss';

export const MadeBy = () => {
    return <div className={styles.madeBy}>
        <div className={styles.year}>
            <div className={'text-sm'}>{'©'}</div>
            <div className={'text-sm'}>{'2023'}</div>
        </div>
        <div className={'text-sm'}>{'Emilia Markiewicz'}</div>
    </div>;
};