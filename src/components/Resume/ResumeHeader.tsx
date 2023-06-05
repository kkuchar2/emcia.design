import React from 'react';

import styles from './ResumeHeader.module.scss';

export const ResumeHeader = () => {

    return <div className={styles.header}>
        <div className={styles.circle}/>
        <div className={styles.headerTop}/>
        <div className={'mb-0 flex grow items-center justify-center  sm:mb-[50px] md:mb-[20px]'}>
            <div className={styles.headerMiddle}>
                <div className={styles.title}>
                    <div className={styles.wrapper}>{'resume'}</div>
                    <div className={styles.line}/>
                    <div className={styles.wrapper2}>
                        {'My previous professional experience is presented below.'}
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
