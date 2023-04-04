import React from 'react';

import { ResumeDesktop } from 'components/Resume/ResumeDesktop';
import { ResumeMobile } from 'components/Resume/ResumeMobile';

export default function Resume() {
    return <div className={'bg-[#f1f1f1]'}>
        <div className={'hidden lg:block'}>
            <ResumeDesktop/>
        </div>
        <div className={'block lg:hidden'}>
            <ResumeMobile/>
        </div>
    </div>;
}