import React from 'react';

import styles from './PulsingDots.module.scss';

interface DotPulseProps {
    mailSent: boolean;
}

export const PulsingDots = (props: DotPulseProps) => {

    const { mailSent } = props;

    return <div className={[styles.dotPulse, mailSent ? styles.mailSent : ''].join(' ')}>
        <div className={'flex gap-[2px]'}>
            <div className={styles.dot}/>
            <div className={styles.dot}/>
            <div className={styles.dot}/>
        </div>
    </div>;
};