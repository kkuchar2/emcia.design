'use client';

import React from 'react';

import { ResumeDesktop } from 'components/Resume/ResumeDesktop';
import { ResumeMobile } from 'components/Resume/ResumeMobile';
import { useMediaQuery } from 'hooks/useMediaQuery';

export const ResumePage = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded) {
        return <div className={'fixed h-screen w-screen'}/>;
    }

    return <div className={'bg-[#f1f1f1]'}>
        {isDesktop ? <ResumeDesktop/> : <ResumeMobile/>}
    </div>;
};