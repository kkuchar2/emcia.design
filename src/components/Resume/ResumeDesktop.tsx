import React from 'react';

import { BottomResumeSection } from 'components/BottomResumeSection/BottomResumeSection';
import { Education } from 'components/Resume/Education';
import { Experience } from 'components/Resume/Experience';
import { ResumeHeader } from 'components/Resume/ResumeHeader';

export const ResumeDesktop = () => {
    return <div className={'bg-[#f1f1f1]'}>
        <ResumeHeader/>
        <div className={'flex flex-col items-center justify-center bg-white'}>
            <Experience/>
            <Education/>
        </div>
        <BottomResumeSection/>
    </div>;
};