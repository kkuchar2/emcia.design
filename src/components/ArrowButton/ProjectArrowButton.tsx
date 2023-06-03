'use client';

import React, { useRef } from 'react';

import { ArrowButtonProps } from 'components/ArrowButton/ArrowButton.types';
import { Arrow } from 'components/svg/Arrow';
import useIntersectionObserver from 'hooks/use-intersection';
import Link from 'next/link';

import styles from './ProjectArrowButton.module.scss';

export const ProjectArrowButton = (props: ArrowButtonProps) => {

    const { text, strokeColor, href, title } = props;

    const ref = useRef<HTMLAnchorElement | null>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    return <Link className={[styles.arrowLink, isVisible ? styles.visible : styles.invisible].join(' ')}
        href={href}
        title={title} ref={ref}>
        <div className={styles.textWrapper}>
            <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.arrowWrapper}>
            <Arrow className={styles.arrow} strokeColor={strokeColor}/>
        </div>
    </Link>;
};