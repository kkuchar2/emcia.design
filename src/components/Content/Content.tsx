import { BottomSection } from 'components/BottomSection/BottomSection';
import { Header } from 'components/Header/Header';
import { Section } from 'components/Section/Section';
import React from 'react';

export const Content = () => {

    return <div className={'relative h-screen w-full'}>
        <Header/>
        <div className={'relative flex w-full justify-center'}>
            <div className={'w-full md:max-w-[1200px]'}>
                <Section/>
            </div>
        </div>
        <BottomSection/>
    </div>;
};
