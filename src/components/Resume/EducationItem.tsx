import React from 'react';

import styled from 'styled-components';

import { IEducationItem } from '../../portfolioConfig.types';

const StyledEducationItem = styled.article`
  color: #1e1e1e;
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
  font-weight: 400;
  color: #1E1E1E;
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
  color: #5C5C5C;
  margin-top: 12px;
  line-height: 1.2;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const EducationTitle = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  min-height: 40px;
  line-height: 1.3;
  letter-spacing: -0.015em;
  margin: 0;
  text-wrap: balance;
`;

const School = styled.div`
  font-size: clamp(0.95rem, 1.4vw, 1rem);
  font-weight: 300;
  margin-top: 0.25rem;
  color: #1E1E1E;
  line-height: 1.35;

  @media (min-width: 1024px) {
    color: #5C5C5C;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EducationItem = (props: IEducationItem) => {
    const { startDate, endDate, title, school } = props;

    return <StyledEducationItem>
        <div>
            <DesktopDate>
                <span>{startDate}</span>
                <span aria-hidden={true}>{'–'}</span>
                <span>{endDate}</span>
            </DesktopDate>
        </div>
        <RightSide>
            <EducationTitle>{title}</EducationTitle>
            <School>{school}</School>
            <MobileDate>
                <span>{startDate}</span>
                <span aria-hidden={true}>{'–'}</span>
                <span>{endDate}</span>
            </MobileDate>
        </RightSide>
    </StyledEducationItem>;
};
