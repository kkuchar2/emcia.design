import React from 'react';

import { scaleUp } from 'components/Circles/keyframes';
import styled from 'styled-components';

const Circle = styled.div`

  transform: scale(0);

  @media (min-width: 1280px) {
    transform: scale(1);
    position: absolute;
    background: #1e1e1e;
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

const StyledWrapper = styled.div`
  font-weight: 600;
  font-size: clamp(2.3rem, 7vw, 4.7rem);
  line-height: 1;
  color: #1E1E1E;
`;

const StyledWrapper2 = styled.div`
  font-weight: 400;
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  line-height: 1.2;
  margin-top: 30px;
  color: #807F7F;
`;

const StyledHeader = styled.div`
  height: 80svh;
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
`;

export const ResumeHeader = () => {

    return <StyledHeader className={'relative flex flex-col overflow-x-clip bg-[#F1F1F1]'}>
        <Circle/>
        <HeaderTop/>
        <div className={'mb-0 flex grow items-center justify-center  sm:mb-[50px] md:mb-[100px]'}>
            <HeaderMiddle>
                <StyledTitle>
                    <StyledWrapper>{'resume'}</StyledWrapper>
                    <StyledWrapper2>{'My previous professional experience is presented below.'}</StyledWrapper2>
                </StyledTitle>
            </HeaderMiddle>
        </div>
    </StyledHeader>;
};
