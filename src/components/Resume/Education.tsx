import React from 'react';

import { CertificationItem } from 'components/Resume/CertificationItem';
import { EducationItem } from 'components/Resume/EducationItem';

import { portfolioConfig } from '../../portfolioConfig';

import styles from './Education.module.scss';

export const Education = () => {

    const education = portfolioConfig.education;
    const certifications = portfolioConfig.certifications;

    return <div className={styles.education}>
        <div className={'flex w-full max-w-[1500px] flex-col gap-[60px] px-[40px]'}>
            <div className={'flex flex-col gap-2 self-start'}>
                <div className={styles.title}>{'Education & Certifications'}</div>
                <div className={styles.description}>{'I was educated in the following schools and completed the following courses:'}</div>
            </div>
            <div className={styles.educationItems}>
                {education.map((item, index) => <EducationItem key={index} {...item}/>)}
            </div>
            <div className={styles.line}/>
            <div className={styles.certificationItems}>
                {certifications.map((item, index) => <CertificationItem key={index} {...item}/>)}
            </div>
        </div>
    </div>;
};