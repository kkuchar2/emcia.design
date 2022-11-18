import React from 'react';

import styled from 'styled-components';

const StyledLine = styled.div`
  width: 2px;
  height: 80%;
  background-color: #F1F1F1;
  position: absolute;
  bottom: 0;
  left: 50%;

  // sm-style:
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledLineBig = styled.div`
  background-color: #F1F1F1;
  position: absolute;
  
  @media (min-width: 768px) {
    width: calc(140%);
    max-width: 1200px;
    height: 1px;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
`;

const CircleSection = function () {
    return <div className={'flex-1 flex items-end justify-center md:justify-end w-full relative'}>
        <StyledLine />
        <div className={'bg-white ' +
            'h-[20vh] w-[20vh] ' +
            'sm:h-[25vw] sm:w-[25vw] ' +
            'md:h-[25vw] md:w-[25vw] ' +
            'lg:h-[25vw] lg:w-[25vw] ' +
            'max-h-[400px] max-w-[400px] ' +
            'rounded-full relative'}>
        </div>
    </div>;
};

const TitleAndDescription = function () {
    return <div className={'flex flex-col gap-[20px] items-center md:items-start justify-center w-full relative'}>
        <div className={'text-white relative ' +
            'w-full ' +
            'md:text-left ' +
            'text-[36px] ' +
            'sm:text-[40px] ' +
            'md:text-[48px] ' +
            'lg:text-[60px] ' +
            'text-center font-bold font-plusJakarta'}>
            <div>{'coming soon'}</div>
            <StyledLineBig />
        </div>
        <div className={'text-[#898989] sm:text-left ' +
            'text-[10px] ' +
            'sm:text-[12px] ' +
            'text-center font-plusJakarta font-[500]'}>
            {'We are currently working hard on this page. See you soon!'}
        </div>
    </div>;
};

const Index = () => {
    return <div
        className={'w-full max-w-[1500px] max-h-[600px] bg-[#1e1e1e] flex p-[30px] ' +
            'pt-[100px] pb-[50px] ' +
            'sm:pb-[100px] md:pl-[100px] md:pr-[100px] lg:pl-[150px] lg:pr-[150px] h-full max-h-[800px] md:max-h-full'}>
        <div className={'w-full flex flex-col md:flex-row justify-center items-center h-full gap-[20px] sm:gap-0 md:gap-[20px]'}>
            <TitleAndDescription/>
            <CircleSection/>
        </div>
    </div>;
};

export default Index;
