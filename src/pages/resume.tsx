import React from 'react';

import { IExperienceItem } from 'components/Resume/ExperienceItem';

const experienceItems: IExperienceItem[] = [
    {
        startDate: '2021',
        endDate: 'Present',
        title: 'Software Engineer',
        company: 'Cognizant',
        duties: [
            'Developing and maintaining web applications using React, Next.js, and TypeScript',
            'Developing and maintaining mobile applications using React Native',
            'Developing and maintaining backend services using Node.js and Express',
            'Developing and maintaining database schemas using MongoDB',
        ]
    },
    {
        startDate: '2021',
        endDate: 'Present',
        title: 'Software Engineer',
        company: 'Cognizant',
        duties: [
            'Developing and maintaining web applications using React, Next.js, and TypeScript',
            'Developing and maintaining mobile applications using React Native',
            'Developing and maintaining backend services using Node.js and Express',
            'Developing and maintaining database schemas using MongoDB',
        ]
    },
    {
        startDate: '2021',
        endDate: 'Present',
        title: 'Software Engineer',
        company: 'Cognizant',
        duties: [
            'Developing and maintaining web applications using React, Next.js, and TypeScript',
            'Developing and maintaining mobile applications using React Native',
            'Developing and maintaining backend services using Node.js and Express',
            'Developing and maintaining database schemas using MongoDB',
        ]
    }
];

export default function Resume() {

    return <div className={'relative h-screen w-full'}>
        <div className={'bg-red'}>
            {/*<ResumeHeader/>*/}
            {/*<div className={'relative flex w-full justify-center'}>*/}
            {/*    <div className={'w-full md:max-w-[1200px]'}>*/}
            {/*        {experienceItems.map((item, index) => <ExperienceItem key={index} {...item}/>)}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>;
}