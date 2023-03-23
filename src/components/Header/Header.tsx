import React from 'react';

import { scaleUp } from 'components/Circles/keyframes';
import { TextButtonWithArrow } from 'components/ProjectItem/TextButtonWithArrow';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Circle = styled(motion.div)`

  transform: scale(0);

  @media (min-width: 1280px) {
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
    animation: ${scaleUp} 2200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
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
  transform: translateY(50%);
  will-change: transform;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  letter-spacing: -0.05em;
  line-height: normal;
  background: blue;

  @media (orientation: landscape) and (max-width: 768px) {
    font-size: clamp(2.5rem, 4vh, 4.5rem);
  }
`;

const WithOpacityAnimate = styled.div<{ delay?: number }>`
  will-change: opacity;
  animation: fadeInText 1s cubic-bezier(0.175, 0.67, 0.3, 0.97) ${({ delay }) => delay || 0}s forwards;
  opacity: 0;
  font-size: clamp(1rem, 2.5vw, 1.5rem);

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
  font-weight: 800;
  font-size: clamp(2.3rem, 7vw, 4.7rem);
  line-height: 1;
  color: #F1F1F1;
`;

const StyledWrapper2 = styled.div`
  font-weight: 400;
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  line-height: 1.2;
  margin-top: 30px;
  color: #BDBDBD;
`;

const StyledHeader = styled.div`
  height: 100svh;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 60%;
`;

const HeaderMiddle = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.4rem;
  position: relative;
  padding: 40px 40px 40px 40px;
  box-sizing: border-box;
  color: #F1F1F1;
  min-height: 40%;
  width: 100%;
  max-width: 1500px;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  //& > *:nth-child(even) {
  //  background: rgba(91, 149, 91, 0.27);
  //}
  //
  //& > *:nth-child(odd) {
  //  background: rgba(140, 108, 48, 0.23);
  //}
`;

export const Header = () => {

    return <StyledHeader className={'relative flex flex-col overflow-x-clip bg-[#1e1e1e]'}>
        <Circle/>
        <HeaderTop/>
        <div className={'mb-0 flex grow items-center justify-center  sm:mb-[50px] md:mb-[100px]'}>
            <HeaderMiddle>
                <StyledTitle>
                    <StyledWrapper>{'emilia markiewicz'}</StyledWrapper>
                    <StyledWrapper>{'ui/ux designer'}</StyledWrapper>
                    <StyledWrapper2>{'Hi  I’m Emilia Markiewicz, a passionate UI/UX Designer from Poland.'}</StyledWrapper2>
                </StyledTitle>
                <div className={'ab mt-[50px] flex flex-col'}>
                    <TextButtonWithArrow
                        position={'relative'}
                        text={'view all my works'}
                        textColor={'#ffffff'}
                        circleColor={'#595959'}
                        hoverBgColor={'rgba(89,89,89,0.49)'}
                        image={'images/arrow_large_light.svg'}
                        width={240}/>
                </div>
            </HeaderMiddle>
        </div>
    </StyledHeader>;
};
