import React from 'react';

import { ArrowButtonProps } from 'components/ArrowButton/ArrowButton.types';
import { Arrow } from 'components/svg/Arrow';
import Link from 'next/link';

import styles from './HeaderArrowButton.module.scss';

export const HeaderArrowButton = (props: ArrowButtonProps) => {

    const { text, strokeColor, title } = props;

    return <Link className={styles.arrowLink} href={'/projects'} title={title}>
        <div className={styles.textWrapper}>
            <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.arrowWrapper}>
            <Arrow className={styles.arrow} strokeColor={strokeColor}/>
        </div>
    </Link>;
};
