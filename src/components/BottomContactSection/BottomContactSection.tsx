import React from 'react';

import { MadeBy } from 'components/MadeBy/MadeBy';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';

import styles from './BottomContact.module.scss';

export const BottomContactSection = () => {

    return <div className={styles.bottomSection}>
        <div className={styles.circleWrapper}>
            <div className={styles.contactSection}>
                <div className={styles.workTitle}>{'Want to work together?'}</div>
                <div className={styles.contactMe}>{'Contact me!'}</div>
                <div className={styles.email}>{'emilia.markiewicz@gmail.com'}</div>
            </div>
        </div>
        <footer className={styles.footer}>
            <SocialMedia/>
            <MadeBy/>
        </footer>
    </div>;
};