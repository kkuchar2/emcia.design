import React from 'react';

import { CertificationItem } from 'components/Resume/CertificationItem';
import { EducationItem } from 'components/Resume/EducationItem';
import styled from 'styled-components';

import { portfolioConfig } from '../../portfolioConfig';

const StyledEducation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  background: #f1f1f1;
  width: 100%;
  padding-bottom: 80px;
  padding-top: 80px;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 160px;
  }
`;

const EducationTitle = styled.div`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 600;
  line-height: 1.5;
  color: #1E1E1E;
  letter-spacing: 0.02em;
`;

const EducationDescription = styled.div`
  font-size: clamp(1rem, 1vw, 1rem);
  color: #807F7F;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

const EducationItems = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    gap: 5rem;
  }
`;

const CertificationItems = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    gap: 5rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #BDBDBD;
`;

export const Education = () => {

    const education = portfolioConfig.education;
    const certifications = portfolioConfig.certifications;

    return <StyledEducation>
        <div className={'flex w-full max-w-[1500px] flex-col gap-[60px] px-[40px]'}>
            <div className={'flex flex-col gap-2 self-start'}>
                <EducationTitle>{'Education & Certifications'}</EducationTitle>
                <EducationDescription>{'I was educated in the following schools and completed the following courses:'}</EducationDescription>
            </div>
            <EducationItems>
                {education.map((item, index) => <EducationItem key={index} {...item}/>)}
            </EducationItems>
            <Line/>
            <CertificationItems>
                {certifications.map((item, index) => <CertificationItem key={index} {...item}/>)}
            </CertificationItems>
        </div>
    </StyledEducation>;
};