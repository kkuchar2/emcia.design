import React from 'react';

import styles from './PulsingDots.module.scss';

interface DotPulseProps {
    visible: boolean;
}

export const PulsingDots = (props: DotPulseProps) => {

    const { visible } = props;

    console.log('PulsingDots', visible);

    return <div className={`${styles.pulsingDots} ${visible ? styles.visible : ''}`}>
        <div className={'flex gap-[2px]'}>
            <div className={styles.dot}/>
            <div className={styles.dot}/>
            <div className={styles.dot}/>
        </div>
    </div>;
};