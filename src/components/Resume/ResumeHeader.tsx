import React from 'react';

import { HeaderArrowButton } from 'components/ArrowButton/HeaderArrowButton';
import styled from 'styled-components';

const Circle = styled.div`

  transform: scale(0);

  @keyframes circle {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (min-width: 768px) {
    transform: scale(1);
    position: absolute;
    background: #1E1E1E;
    border-radius: 50%;
    border: 1px solid #e3e3e3;
    width: 62.5vw;
    height: 62.5vw;
    bottom: max(-1200px, calc(-62.5vw / 2));
    right: -25vw;
    max-width: max(2400px, 100vh);
    max-height: max(2400px, 100vh);
    animation: circle 2200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }
`;

const StyledHeaderTitle = styled.h1`
  align-self: flex-end;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  bottom: 100px;
  position: relative;
  height: auto;
  width: 100%;
  padding: 20px 20px 100px;
  box-sizing: border-box;
  max-width: 1200px;
  color: #1e1e1e;
  overflow: hidden;

  @media (min-width: 768px) {
    bottom: 200px;
  }
`;

const WithTransformAnimate = styled.div<{ delay?: number }>`
  transform: translateY(100%);
  will-change: transform;
  line-height: normal;
  animation: lineHeight 1.2s cubic-bezier(0.175, 0.67, 0.3, 0.97) ${({ delay }) => delay || 0}s forwards;

  @keyframes lineHeight {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const WithOpacityAnimate = styled.div<{ delay?: number }>`
  will-change: opacity;
  animation: fadeInText 1s cubic-bezier(0.175, 0.67, 0.3, 0.97) ${({ delay }) => delay || 0}s forwards;
  opacity: 0;

  @keyframes fadeInText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const StyledExperience = styled.div`
  padding: 200px;
`;

const StyledExperienceTitle = styled.h1`
  color: #F1F1F1;
  font-size: 3rem;
  font-weight: 600;
`;

const StyledExperienceDescription = styled.div`
  color: #BDBDBD;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const ResumeHeader = () => {

    return <div className={'relative h-screen w-full'}>
        <section className={'header relative flex h-[75vh] items-center justify-center overflow-x-clip bg-[#f1f1f1]'}>
            <Circle/>
            <StyledHeaderTitle>
                <div className={'flex flex-wrap gap-[1rem]'}>
                    <StyledWrapper>
                        <WithTransformAnimate className={'text-5xl font-semibold md:text-7xl'}>{'resume'}</WithTransformAnimate>
                    </StyledWrapper>
                </div>
                <StyledWrapper>
                    <WithOpacityAnimate className={'text-xl'} delay={0.5}>
                        {'My previous professional experience is presented below.'}
                    </WithOpacityAnimate>
                </StyledWrapper>
                <HeaderArrowButton text={'more details'} image={'images/arrow_large_dark.svg'}/>
            </StyledHeaderTitle>
        </section>
        <StyledExperience>
            <StyledExperienceTitle>
                {'Experience'}
            </StyledExperienceTitle>
            <StyledExperienceDescription>
                {'I have worked for the following companies so far.'}
            </StyledExperienceDescription>
        </StyledExperience>
    </div>;
};
