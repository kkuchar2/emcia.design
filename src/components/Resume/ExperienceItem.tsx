import React, { useMemo } from 'react';

import styled from 'styled-components';

import { IExperienceItem } from '../../protfolioConfig.types';

const StyledExperienceItem = styled.div`
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 10px;
`;

const DateAndJobName = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  line-height: 1;

  @media (min-width: 1024px) {
    grid-template-columns: 130px 2fr;
    grid-column-gap: 50px;
  }
`;

const MobileDate = styled.div`
  display: flex;
  gap: 5px;
  font-size: clamp(1rem, 1.5vw, 1rem);
  font-weight: 400;
  color: #807F7F;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const JobTitle = styled.div`
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 600;
`;

const JobAndCompany = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  line-height: 1;

  @media (min-width: 1024px) {
    grid-template-columns: 130px 2fr;
    grid-column-gap: 50px;
  }
`;

const Company = styled.div`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  font-weight: 300;
`;

const Duty = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

const Dot = styled.div`
  content: '•';
  transform: scale(1.2);
  display: grid;
  place-items: center;
  color: #d3d3d3;
`;

export const ExperienceItem = (props: IExperienceItem) => {
    const { startDate, endDate, title, company, duties } = props;

    const dutiesList = useMemo(() => {
        return duties.map((duty, index) => {
            return <div key={index} className={'flex items-start gap-2'}>
                <Dot>{'•'}</Dot>
                <Duty>{duty}</Duty>
            </div>;
        });
    }, [duties]);

    return <StyledExperienceItem>
        <DateAndJobName>
            <div className={'hidden items-center gap-1 text-lg text-[#807F7F] lg:flex'}>
                <div>{startDate}</div>
                <div>{'-'}</div>
                <div>{endDate}</div>
            </div>
            <JobTitle>{title}</JobTitle>
        </DateAndJobName>
        <JobAndCompany>
            <div/>
            <div className={'mt-3 flex flex-col gap-2 lg:mt-0'}>
                <Company>{company}</Company>
                <MobileDate>
                    <div>{startDate}</div>
                    <div>{'-'}</div>
                    <div>{endDate}</div>
                </MobileDate>
                <div className={'mt-2 flex flex-col gap-1 text-sm text-[#807F7F]'}>
                    <div className={'flex flex-col gap-1'}>
                        {dutiesList}
                    </div>
                </div>
            </div>

        </JobAndCompany>
    </StyledExperienceItem>;
};