'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { useMediaQuery } from 'hooks/useMediaQuery';

import styles from './ContactPage.module.scss';

export const ContactPage = () => {

    const [loaded, setLoaded] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [recentSender, setRecentSender] = useState(null);

    const isDesktop = useMediaQuery('(min-width: 1024px)');

    useEffect(() => {
        setLoaded(true);
    }, []);

    const onMailSent = useCallback((name: string) => {
        setRecentSender(name);
        setMailSent(true);
    }, []);

    if (!loaded) {
        return null;
    }

    return <div className={styles.contact}>
        {isDesktop && <div className={styles.bigScreenCircleWrapper}>
            <div className={styles.bigScreenCircle}/>
            <div className={styles.bigScreenCircle2}>
                <div className={styles.bigScreenTitle}>
                    <h1 className={styles.title}>{'contact'}</h1>
                    <div className={styles.line}/>
                    <div className={styles.titleHelloMessage}>
                        <h2>{'Would you like to work with me?'}</h2>
                        <h2>{'Send a message!'}</h2>
                    </div>
                </div>
            </div>
        </div>}

        {isDesktop || <>
            <div className={[styles.topCircle, mailSent ? styles.mailSent : ''].join(' ')}>
                <div className={'absolute bottom-[50px] flex flex-col gap-2 mix-blend-difference'}>
                    <h1 className={styles.title}>{'contact'}</h1>
                    <div className={styles.titleHelloMessage}>
                        <h2>{'Would you like to work with me?'}</h2>
                        <h2>{'Send a message!'}</h2>
                    </div>
                </div>
            </div>
            <div className={'h-[100px] w-full bg-[#f1f1f1]'}/>
            <div className={styles.fakeCircleBlock}/>
        </>}

        {mailSent && <div className={styles.confirmation}>
            <div className={styles.confirmationTitle}>{'Thank you for your message'}</div>
            <div className={styles.confirmationTitle}>{recentSender}</div>
            <div className={styles.confirmationMessage}>{'I will get back to you as soon as possible.'}</div>
        </div>}

        <div className={'hidden h-[100px] w-full lg:block'}/>

        <div className={'relative grid w-full grow place-items-center md:pt-0 lg:flex lg:pt-7'}>
            <div className={'hidden w-1/2 lg:block'}/>
            <div className={styles.contactFormWrapper}>
                <div className={'w-[min(100%,600px)] p-5' + ` ${mailSent ? 'hidden' : 'block'}`}>
                    <ContactForm onMailSent={onMailSent}/>
                    <div className={'mt-[20px] flex w-full justify-center sm:mt-[50px]'}>
                        <SocialMedia title={'or check out my social media'}/>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};