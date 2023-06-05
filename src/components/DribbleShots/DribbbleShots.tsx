import React from 'react';

import dynamic from 'next/dynamic';

import { DribbbleShotsConfig } from '../../portfolioConfig.types';

import styles from './DribbbleShots.module.scss';

const DynamicGalleryCarousel = dynamic(() => import('../Gallery/Gallery'), {
    loading: () => <></>
});

export const DribbbleShots = (props: DribbbleShotsConfig) => {

    const { title, secondaryTitle, shots } = props;

    return <div className={styles.dribbleShots}>
        <div className={styles.titlesWrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.secondaryTitle}>{secondaryTitle}</div>
        </div>
        <div className={styles.carouselWrapper}>
            <DynamicGalleryCarousel shots={shots}/>
        </div>
    </div>;
};
