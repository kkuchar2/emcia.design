import React from 'react';

import {BottomResumeSection} from 'components/BottomResumeSection/BottomResumeSection';
import {Education} from 'components/Resume/Education';
import {Experience} from 'components/Resume/Experience';
import styled from 'styled-components';

const StyledResume = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    container-type: inline-size;
    letter-spacing: 0.03em;
`;

const Title = styled.h1`
    font-size: 2.8rem;
    font-weight: 600;
    color: #e1e1e1;
    text-align: center;
    position: relative;
    line-height: 1;
    letter-spacing: -0.03em;
    text-wrap: balance;
    margin: 0;
`;

const TitleHelloMessage = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #807F7F;
    text-align: center;
    line-height: 1.4;
    margin: 0;
`;

const TopCircle = styled.div`
    position: absolute;
    background: #f1f1f1;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    width: 100%;
    height: 100vw;
    top: calc(-50vw + 100px);
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (min-width: 640px) {
        width: 100%;
        height: 80vw;
        top: calc(100px - 40vw);
    }

    @media (min-width: 768px) {
        width: 100%;
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

const HeaderSpacer = styled.div`
    height: 100px;
    width: 100%;
    flex-shrink: 0;
`;

export const ResumeMobile = () => {
    return <StyledResume as={'main'}>
        <TopCircle>
            <div className={'absolute bottom-[80px] flex flex-col gap-2 mix-blend-difference'}>
                <Title>{'resume'}</Title>
                <div className={'flex flex-col gap-0.5'}>
                    <TitleHelloMessage>{'My previous professional experience'}</TitleHelloMessage>
                    <TitleHelloMessage>{'is presented below'}</TitleHelloMessage>
                </div>
            </div>
        </TopCircle>
        <HeaderSpacer aria-hidden={true}/>
        <FakeCircleBlock aria-hidden={true}/>
        <div className={'flex flex-col items-center justify-center bg-[#f1f1f1]'}>
            <Experience/>
            <Education/>
        </div>
        <BottomResumeSection/>
    </StyledResume>;
};
