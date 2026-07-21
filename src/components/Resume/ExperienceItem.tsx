import React, { useMemo } from 'react';

import styled from 'styled-components';

import { IExperienceItem } from '../../portfolioConfig.types';

const StyledExperienceItem = styled.article`
  color: #f1f1f1;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 60px;
  letter-spacing: 0.03em;

  @media (min-width: 1024px) {
    grid-template-columns: 160px minmax(200px, 1fr);
  }
`;

const DesktopDate = styled.div`
  display: none;
  gap: 6px;
  font-size: 1rem;
  font-weight: 300;
  color: #C8C8C8;
  line-height: 1.2;
  white-space: nowrap;

  @media (min-width: 1024px) {
    display: flex;
    min-height: 40px;
    align-items: center;
  }
`;

const MobileDate = styled.div`
  display: flex;
  gap: 6px;
  font-size: 0.95rem;
  font-weight: 400;
  color: #A8A8A8;
  margin-top: 12px;
  line-height: 1.2;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const JobTitle = styled.h3`
  font-size: clamp(1.35rem, 2.5vw, 1.5rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  min-height: 40px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
  text-wrap: balance;
`;

const Company = styled.div`
  font-size: clamp(1.05rem, 1.5vw, 1.1rem);
  font-weight: 300;
  line-height: 1.35;
  color: #E8E8E8;
  margin-top: 2px;
`;

const Duty = styled.span`
  font-size: 1rem;
  color: #BDBDBD;
  line-height: 1.55;
  letter-spacing: 0.01em;

  @media (min-width: 1024px) {
    color: #A8A8A8;
  }
`;

const Dot = styled.span`
  flex: 0 0 0.75em;
  width: 0.75em;
  font-size: 1rem;
  line-height: 1.55;
  color: #BDBDBD;
  text-align: center;
  user-select: none;

  @media (min-width: 1024px) {
    color: #A8A8A8;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Duties = styled.ul`
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const DutyItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 0.55rem;
`;

export const ExperienceItem = (props: IExperienceItem) => {
    const { startDate, endDate, title, company, duties } = props;

    const dutiesList = useMemo(() => {
        return duties.map((duty, index) => {
            return <DutyItem key={index}>
                <Dot aria-hidden={true}>{'•'}</Dot>
                <Duty>{duty}</Duty>
            </DutyItem>;
        });
    }, [duties]);

    return <StyledExperienceItem>
        <div>
            <DesktopDate>
                <span>{startDate}</span>
                <span aria-hidden={true}>{'–'}</span>
                <span>{endDate}</span>
            </DesktopDate>
        </div>
        <RightSide>
            <JobTitle>{title}</JobTitle>
            <Company>{company}</Company>
            <MobileDate>
                <span>{startDate}</span>
                <span aria-hidden={true}>{'–'}</span>
                <span>{endDate}</span>
            </MobileDate>
            <Duties>
                {dutiesList}
            </Duties>
        </RightSide>
    </StyledExperienceItem>;
};
