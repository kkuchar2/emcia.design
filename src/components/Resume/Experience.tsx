import React from 'react';

import { ExperienceItem } from 'components/Resume/ExperienceItem';
import styled from 'styled-components';

import { portfolioConfig } from '../../portfolioConfig';

const StyledExperience = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  background: #1E1E1E;
  width: 100%;
  padding-bottom: 80px;
  padding-top: 30px;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 160px;
  }
`;

const ExperienceTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #f1f1f1;
  text-wrap: balance;
  margin: 0;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: #A8A8A8;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.5;
  margin: 0;
  max-width: 48ch;
  text-wrap: pretty;
`;

const StyledExperienceItems = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  gap: 5.5rem;

  @media (min-width: 768px) {
    gap: 7rem;
  }
`;

export const Experience = () => {
    const exp = portfolioConfig.experience;

    return <StyledExperience>
        <div className={'flex w-full max-w-[1500px] flex-col gap-[60px] px-[40px] md:mt-[50px]'}>
            <div className={'flex flex-col gap-2 self-start'}>
                <ExperienceTitle>{'Experience'}</ExperienceTitle>
                <ExperienceDescription>{'I have worked for the following companies so far:'}</ExperienceDescription>
            </div>
            <StyledExperienceItems>
                {exp.map((item, index) => <ExperienceItem key={index} {...item}/>)}
            </StyledExperienceItems>
        </div>
    </StyledExperience>;
};
