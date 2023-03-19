import React, { useMemo } from 'react';

export interface IExperienceItem {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    duties: string[];
}

export const ExperienceItem = (props: IExperienceItem) => {
    const { startDate, endDate, title, company, duties } = props;

    const dutiesList = useMemo(() => {
        return duties.map((duty, index) => <li key={index}>{duty}</li>);
    }, [duties]);

    return <div className={'flex flex-col gap-1 bg-red-200'}>
        <div className={'flex flex-col gap-1'}>
            <div className={'flex flex-row gap-1'}>
                <div className={'text-[14px] text-[#F1F1F1]'}>{startDate}</div>
                <div className={'text-[14px] text-[#F1F1F1]'}>{'-'}</div>
                <div className={'text-[14px] text-[#F1F1F1]'}>{endDate}</div>
            </div>
            <div className={'flex flex-row gap-1'}>
                <div className={'text-[14px] text-[#F1F1F1]'}>{title}</div>
                <div className={'text-[14px] text-[#F1F1F1]'}>{'at'}</div>
                <div className={'text-[14px] text-[#F1F1F1]'}>{company}</div>
            </div>
        </div>
        <div className={'flex flex-col gap-1'}>
            <ul className={'list-inside list-disc'}>
                {dutiesList}
            </ul>
        </div>
    </div>;
};