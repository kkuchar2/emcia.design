import { TextButtonWithArrow } from 'components/ProjectItem/TextButtonWithArrow';
import React, { useRef } from 'react';
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
    background: #ffffff;
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
  color: #F1F1F1;
  overflow: hidden;

  @media (min-width: 768px) {
    bottom: 200px;
  }
`;

export const TextButtonWithArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 3rem;
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

export const Header = () => {

    const circleRef = useRef<HTMLDivElement>(null);

    return <section className={'header relative flex h-screen items-center justify-center overflow-x-clip bg-[#1e1e1e]'}>
        <Circle ref={circleRef}/>
        <StyledHeaderTitle>
            <div className={'flex flex-wrap gap-[1rem]'}>
                <StyledWrapper>
                    <WithTransformAnimate className={'text-5xl font-semibold md:text-7xl'}>{'emilia'}</WithTransformAnimate>
                </StyledWrapper>
                <StyledWrapper>
                    <WithTransformAnimate delay={0.2} className={'text-5xl font-semibold md:text-7xl'}>{'markiewicz'}</WithTransformAnimate>
                </StyledWrapper>

            </div>
            <StyledWrapper>
                <WithTransformAnimate className={'text-5xl font-semibold md:text-7xl'} delay={0.3}>
                    {'ui/ux designer'}
                </WithTransformAnimate>
            </StyledWrapper>
            <StyledWrapper>
                <WithOpacityAnimate className={'text-xl'} delay={0.5}>
                    {'Hi  I’m Emilia Markiewicz, a passionate UI/UX Designer from Poland.'}
                </WithOpacityAnimate>
            </StyledWrapper>
            <TextButtonWithArrow text={'view all my works'} textColor={'#ffffff'} circleColor={'#595959'} image={'images/arrow_large_light.svg'} width={240}/>
        </StyledHeaderTitle>
    </section>;
};
