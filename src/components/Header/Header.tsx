import React from 'react';

import { HeaderArrowButton } from 'components/ArrowButton/HeaderArrowButton';
import { ScrollIndicator } from 'components/ScrollIndicator/ScrollIndicator';

import styles from './Header.module.scss';

export const Header = () => {

    return <div className={styles.header}>
        <div className={styles.circle}/>
        <div className={styles.headerTop}/>
        <div className={'mb-[150px] flex grow items-end justify-center  md:mb-[200px]'}>
            <div className={'flex w-full max-w-[1500px] flex-col justify-center gap-[1.4rem] p-[40px] text-[#f1f1f1]'}>
                <div>
                    <div className={'index_title_wrapper animate-clipPath'}>
                        <h1 className={'index_title'}>
                            {'emilia markiewicz'}
                        </h1>
                    </div>
                    <div className={''}>
                        <div className={'index_title_wrapper animate-clipPath animation-delay-300'}>
                            <h2 className={'index_title animation-delay-300'}>
                                {'ui/ux designer'}
                            </h2>
                        </div>
                    </div>
                </div>
                <h3 className={'index_description animation-delay-300'}>
                    {'Hi I’m Emilia Markiewicz, a passionate UI/UX Designer from Poland.'}
                </h3>
                <div className={'mt-[10px] inline-flex'}>
                    <HeaderArrowButton
                        text={'view all my works'}
                        strokeColor={'#f1f1f1'}
                        title={'View all my works'}/>
                </div>
            </div>
        </div>
        <ScrollIndicator/>
    </div>;
};
