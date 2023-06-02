import React from 'react';

import styled from 'styled-components';

import { HeaderArrowButton } from 'components/ArrowButton/HeaderArrowButton';
import { scaleUp } from 'components/Circles/keyframes';
import { ScrollIndicator } from 'components/ScrollIndicator/ScrollIndicator';

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

export const Header = () => {

    return <StyledHeader className={'relative flex flex-col overflow-x-clip bg-[#1e1e1e]'}>
        <Circle/>
        <HeaderTop/>
        <div className={'mb-[150px] flex grow items-end justify-center  md:mb-[200px]'}>
            <div className={'flex w-full max-w-[1500px] flex-col justify-center gap-[1.4rem] p-[40px] text-[#f1f1f1]'}>
                <div>
                    <div className={'index_title_wrapper animate-clipPath'}>
                        <h1 className={'index_title'}>
                            {'emilia markiewicz'}
                        </h1>
                    </div>
                    <div className={''}>
                        <div className={'index_title_wrapper animate-clipPath animation-delay-300'}>
                            <h2 className={'index_title animation-delay-300'}>
                                {'ui/ux designer'}
                            </h2>
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
            </div>
        </div>
        <ScrollIndicator/>
    </StyledHeader>;
};
