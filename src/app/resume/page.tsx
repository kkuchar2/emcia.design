'use client';

import React from 'react';

import { ResumeDesktop } from 'components/Resume/ResumeDesktop';
import { ResumeMobile } from 'components/Resume/ResumeMobile';
import { useMediaQuery } from 'hooks/useMediaQuery';

export default function Resume() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return <div className={'bg-[#f1f1f1]'}>
        {isDesktop ? <ResumeDesktop/> : <ResumeMobile/>}
    </div>;
}
