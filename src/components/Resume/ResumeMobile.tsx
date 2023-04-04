import React from 'react';

import { BottomResumeSection } from 'components/BottomResumeSection/BottomResumeSection';
import { Education } from 'components/Resume/Education';
import { Experience } from 'components/Resume/Experience';
import styled from 'styled-components';

const StyledResume = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  container-type: inline-size;
  letter-spacing: 0.03em;
`;

const Title = styled.div`
  font-size: 2.8rem;
  visibility: visible;
  font-weight: 600;
  color: #e1e1e1;
  text-align: center;
  position: relative;
`;

const TitleHelloMessage = styled.div`
  font-size: clamp(1rem, 1vw, 1rem);
  font-weight: 400;
  color: #807F7F;
  text-align: center;
`;

const TopCircle = styled.div`
  position: absolute;
  background: #ffffff;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  width: 100vw;
  height: 100vw;
  top: calc(-50vw + 100px);
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (min-width: 640px) {
    width: 100vw;
    height: 80vw;
    top: calc(100px - 40vw);
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 60vw;
    top: calc(100px - 30vw);
  }
`;

const FakeCircleBlock = styled.div`
  width: 100%;
  height: calc(50vw);
  background: #1e1e1e;

  @media (min-width: 640px) {
    height: 40vw;
  }

  @media (min-width: 768px) {
    height: 30vw;
  }
`;

export const ResumeMobile = () => {
    return <StyledResume>
        <TopCircle>
            <div className={'absolute bottom-[80px] flex flex-col gap-2 mix-blend-difference'}>
                <Title>{'resume'}</Title>
                <div>
                    <TitleHelloMessage>{'My previous professional experience'}</TitleHelloMessage>
                    <TitleHelloMessage>{'is presented below'}</TitleHelloMessage>
                </div>
            </div>
        </TopCircle>
        <div className={'h-[100px] w-full bg-white'}/>
        <FakeCircleBlock/>
        <div className={'flex flex-col items-center justify-center bg-white'}>
            <Experience/>
            <Education/>
        </div>
        <BottomResumeSection/>
    </StyledResume>;
};