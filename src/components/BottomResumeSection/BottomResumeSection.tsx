import React from 'react';

import { MadeBy } from 'components/MadeBy/MadeBy';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import Link from 'next/link';

import styles from './BottomResumeSection.module.scss';

export const BottomResumeSection = () => {

    return <div className={styles.bottomSection}>
        <div className={styles.circleWrapper}>
            <div className={styles.downloadResumeSection}>
                <div className={styles.downloadResumeTitle}>{'Download my resume'}</div>
                <Link className={styles.resumeButton}
                    href={'doc/CV-Emilia-Markiewicz.pdf'}
                    target={'blank'}
                    title={'Download my resume'}>
                    {'Click here'}
                </Link>
            </div>
        </div>
        <footer className={styles.footer}>
            <SocialMedia/>
            <MadeBy/>
        </footer>
    </div>;
};