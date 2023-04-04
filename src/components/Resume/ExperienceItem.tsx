import React, { useMemo } from 'react';

import styled from 'styled-components';

import { IExperienceItem } from '../../portfolioConfig.types';

const StyledExperienceItem = styled.div`
  color: #f1f1f1;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 60px;
  line-height: 1;
  letter-spacing: 0.03em;

  @media (min-width: 1024px) {
    grid-template-columns: min-content minmax(200px, 1fr);
  }
`;

const DesktopDate = styled.div`
  display: none;
  gap: 5px;
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  font-weight: 300;
  color: #f1f1f1;

  @media (min-width: 1024px) {
    display: flex;
    height: 40px;
    align-items: center;
  }
`;

const MobileDate = styled.div`
  display: flex;
  gap: 5px;
  font-size: clamp(1rem, 1.5vw, 1rem);
  font-weight: 400;
  color: #807F7F;
  margin-top: 12px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const JobTitle = styled.div`
  font-size: clamp(1.4rem, 2.5vw, 1.5rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 40px;
`;

const Company = styled.div`
  font-size: clamp(1.2rem, 1.5vw, 1.1rem);
  font-weight: 300;
  margin-top: 12px;
`;

const Duty = styled.div`
  font-size: clamp(1rem, 1.5vw, 1rem);
  color: #BDBDBD;

  @media (min-width: 1024px) {
    color: #807F7F;
  }
`;

const Dot = styled.div`
  content: '•';
  transform: scale(1.2);
  display: grid;
  place-items: center;
  color: #BDBDBD;

  @media (min-width: 1024px) {
    color: #807F7F;
  }
`;

const LeftSide = styled.div`
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
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
        <LeftSide>
            <DesktopDate>
                <div>{startDate}</div>
                <div>{'-'}</div>
                <div>{endDate}</div>
            </DesktopDate>
        </LeftSide>
        <RightSide>
            <JobTitle>{title}</JobTitle>
            <Company>{company}</Company>
            <MobileDate>
                <div>{startDate}</div>
                <div>{'-'}</div>
                <div>{endDate}</div>
            </MobileDate>
            <div className={'mt-[20px] flex flex-col gap-1 text-sm text-[#807F7F]'}>
                <div className={'flex flex-col gap-2'}>
                    {dutiesList}
                </div>
            </div>
        </RightSide>
    </StyledExperienceItem>;
};