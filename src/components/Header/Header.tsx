import React from 'react';

import { HeaderArrowButton } from 'components/ArrowButton/HeaderArrowButton';
import { scaleUp } from 'components/Circles/keyframes';
import styled from 'styled-components';

const Circle = styled.div`

  transform: scale(0);

  @media (min-width: 1024px) {
    transform: scale(1);
    position: absolute;
    background: #f1f1f1;
    border-radius: 50%;
    border: 1px solid #e3e3e3;
    width: 62.5vw;
    height: 62.5vw;
    bottom: max(-1200px, calc(-62.5vw / 2));
    right: -25vw;
    max-width: max(2400px, 100dvh);
    max-height: max(2400px, 100dvh);
    animation: ${scaleUp} 2200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }
`;

const StyledHeader = styled.div`
  height: 100svh;
  position: relative;
`;

const HeaderTop = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    min-height: 100px;
    height: 100px;
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.4rem;
  padding: 40px;
  width: 100%;
  max-width: 1500px;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2rem;
  height: 3.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(241, 241, 241, 0.34);
  display: flex;
  bottom: 50px;
  opacity: var(--scroll-indicator-opacity, 1);
  transition: opacity 0.5s ease;

  @media (orientation: landscape) {
    bottom: 10px;
    right: 20px;
    left: unset;
    transform: translateX(-50%) scale(0.8);
  }

  @media (min-width: 1024px) {
    display: none;
  }

  @keyframes dot {
    0% {
      width: 0;
      height: 0;
      top: 0.5rem;
      opacity: 0;
    }
    50% {
      width: 0.5rem;
      height: 0.5rem;
      opacity: 1;
    }
    100% {
      width: 0.5rem;
      height: 0.5rem;
      top: 2.5rem;
      opacity: 0;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #F1F1F1;
    animation: dot 2s ease infinite;
  }
`;

export const Header = () => {

    return <StyledHeader className={'relative flex flex-col overflow-x-clip bg-[#1e1e1e]'}>
        <Circle/>
        <HeaderTop/>
        <div className={'mb-[150px] flex grow items-end justify-center  md:mb-[200px]'}>
            <HeaderMiddle>
                <div>
                    <div className={'index_title_wrapper animate-clipPath'}>
                        <div className={'index_title'}>
                            {'emilia markiewicz'}
                        </div>
                    </div>
                    <div className={'second_title_wrapper'}>
                        <div className={'index_title_wrapper animate-clipPath animation-delay-300'}>
                            <div className={'index_title animation-delay-300'}>
                                {'ui/ux designer'}
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className={'index_description animation-delay-300'}>
                    {'Hi I’m Emilia Markiewicz, a passionate UI/UX Designer from Poland.'}
                </h3>
                <div className={'mt-[10px] inline-flex'}>
                    <HeaderArrowButton
                        text={'view all my works'}
                        strokeColor={'#f1f1f1'}
                        title={'View all my works'}/>
                </div>
            </HeaderMiddle>
        </div>
        <ScrollIndicator/>
    </StyledHeader>;
};
