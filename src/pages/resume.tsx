import React from 'react';

import { BottomSection } from 'components/BottomSection/BottomSection';
import { Education } from 'components/Resume/Education';
import { Experience } from 'components/Resume/Experience';
import { ResumeHeader } from 'components/Resume/ResumeHeader';

export default function Resume() {
    return <div className={'relative w-full bg-[#f1f1f1]'}>
        <ResumeHeader/>
        <div className={'flex flex-col items-center justify-center bg-white'}>
            <Experience/>
            <Education/>
        </div>
        <BottomSection/>
    </div>;
}