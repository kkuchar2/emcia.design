import React from 'react';

import { ExperienceItem } from 'components/Resume/ExperienceItem';
import styled from 'styled-components';

import { portfolioConfig } from '../../portfolioConfig';

const StyledExperience = styled.div`
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

const ExperienceTitle = styled.div`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.06em;
  color: #f1f1f1;
`;

const ExperienceDescription = styled.div`
  font-size: clamp(1rem, 1.7vw, 1rem);
  color: #807F7F;
  font-weight: 400;
  letter-spacing: -0.02em;
  max-width: 400px;
`;

const StyledExperienceItems = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  gap: 5rem;
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