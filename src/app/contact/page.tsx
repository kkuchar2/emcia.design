'use client';

import React, { useCallback, useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import { lineGrow, scaleUp } from 'components/Circles/keyframes';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { useMediaQuery } from 'hooks/useMediaQuery';

const showConfirmation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledContact = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: unset;
  container-type: inline-size;

  @media (min-width: 1024px) {
    height: 100svh;
    min-height: 100dvh;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 8vw, 5rem);
  font-weight: 600;
  color: #e1e1e1;
  text-align: center;
  position: relative;

  @media (min-width: 1024px) {
    text-align: left;
    line-height: normal;
  }
`;

const TitleHelloMessage = styled.h2`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  color: #807F7F;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const ConfirmationTitle = styled.div`
  font-size: clamp(1.2rem, 2vw, 2rem);
  font-weight: 600;
  color: white;
  mix-blend-mode: difference;
  text-align: center;
  transform: scale(0);
  animation: ${showConfirmation} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
`;

const ConfirmationMessage = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  transform: scale(0);
  animation: ${showConfirmation} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s forwards;
`;

const Confirmation = styled.div<{ mailSent?: boolean }>`
  position: absolute;
  height: 100dvh;
  right: 0;
  color: #ffffff;
  place-items: center;
  place-content: center;
  gap: 10px;
  display: grid;
  background: #1e1e1e;
  width: 100%;
  padding-bottom: 0;
  z-index: 1;

  @media (orientation: landscape) and (max-width: 1024px) {
    top: 0;
    left: 0;
    height: 100svh;
    width: 100vw;
    padding-bottom: 0;
  }

  @media (min-width: 1024px) {
    right: 0;
    place-items: center;
    place-content: center;
    gap: 20px;
    display: grid;
    width: 50%;
    height: calc(100svh - 100px);
    top: 100px;
  }
`;

const BigScreenTitle = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  left: calc(100% - 400px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  mix-blend-mode: difference;
  gap: 40px;
  width: 400px;
  overflow: hidden;

  @media (max-height: 768px) {
    top: 40%;
  }
`;

const BigScreenCircle = styled.div`
  position: absolute;
  width: 160vh;
  height: 160vh;
  border-radius: 50%;
  background: #f1f1f1;
  right: 50%;
  bottom: calc(50% - 80vh);
  display: block;
  animation: ${scaleUp} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

  @media (max-height: 768px) {
    width: 100vw;
    height: 100vw;
    bottom: calc(30% - 60vw);
  }
`;

const BigScreenCircle2 = styled.div`
  position: absolute;
  isolation: isolate;
  width: 160vh;
  height: 160vh;
  border-radius: 50%;
  right: 50%;
  bottom: calc(50% - 80vh);
  overflow: hidden;
  mix-blend-mode: difference;

  @media (max-height: 768px) {
    width: 100vw;
    height: 100vw;
    bottom: calc(30% - 60vw);
  }
`;

const BigScreenCircleWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
`;

const Line = styled.div`
  position: absolute;
  width: 0;
  height: 1px;
  top: 110px;
  background: #d1d1d1;
  animation: ${lineGrow} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s forwards;
`;

const FakeCircleBlock = styled.div`
  width: 100%;
  height: calc(50vw);

  @media (min-width: 640px) {
    height: 40vw;
  }

  @media (min-width: 768px) {
    height: 30vw;
  }
`;

const TopCircle = styled.div<{ mailSent: boolean }>`
  position: absolute;
  background: #f1f1f1;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  width: 100vw;
  height: 100vw;
  top: calc(-50vw + 100px);
  left: 0;
  align-items: center;
  justify-content: center;
  display: ${({ mailSent }) => (mailSent ? 'none' : 'flex')};

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

const StyledCircleBox = styled.div`
  width: 50%;
`;

const StyledContactFormWrapper = styled.div`
  overflow: auto;
  position: relative;

  @media (min-width: 1024px) {
    max-height: calc(100svh - 100px);
  }
`;

export default function Contact() {

    const [loaded, setLoaded] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [recentSender, setRecentSender] = useState(null);

    const isDesktop = useMediaQuery('(min-width: 1024px)');

    useEffect(() => {
        setLoaded(true);
    }, []);

    const onMailSent = useCallback((name: string) => {
        setRecentSender(name);
        setMailSent(true);
    }, []);

    if (!loaded) {
        return null;
    }

    return <StyledContact>
        {isDesktop && <BigScreenCircleWrapper>
            <BigScreenCircle/>
            <BigScreenCircle2>
                <BigScreenTitle>
                    <Title>{'contact'}</Title>
                    <Line/>
                    <div>
                        <TitleHelloMessage>{'Would you like to work with me?'}</TitleHelloMessage>
                        <TitleHelloMessage>{'Send a message!'}</TitleHelloMessage>
                    </div>
                </BigScreenTitle>
            </BigScreenCircle2>
        </BigScreenCircleWrapper>}

        {isDesktop || <>
            <TopCircle mailSent={mailSent}>
                <div className={'absolute bottom-[50px] flex flex-col gap-2 mix-blend-difference'}>
                    <Title>{'contact'}</Title>
                    <div>
                        <TitleHelloMessage>{'Would you like to work with me?'}</TitleHelloMessage>
                        <TitleHelloMessage>{'Send a message!'}</TitleHelloMessage>
                    </div>
                </div>
            </TopCircle>
            <div className={'h-[100px] w-full bg-[#f1f1f1]'}/>
            <FakeCircleBlock/>
        </>}

        {mailSent && <Confirmation>
            <ConfirmationTitle>{'Thank you for your message'}</ConfirmationTitle>
            <ConfirmationTitle>{recentSender}</ConfirmationTitle>
            <ConfirmationMessage>{'I will get back to you as soon as possible.'}</ConfirmationMessage>
        </Confirmation>}

        <div className={'hidden h-[100px] w-full lg:block'}/>

        <div className={'relative grid w-full grow place-items-center md:pt-0 lg:flex lg:pt-7'}>
            <StyledCircleBox className={'hidden lg:block'}/>
            <StyledContactFormWrapper className={'grid w-full place-items-center lg:w-1/2 lg:py-[40px]'}>
                <div className={'w-[min(100%,600px)] p-5' + ` ${mailSent ? 'hidden' : 'block'}`}>
                    <ContactForm onMailSent={onMailSent}/>
                    <div className={'mt-[20px] flex w-full justify-center sm:mt-[50px]'}>
                        <SocialMedia title={'or check out my social media'}/>
                    </div>
                </div>
            </StyledContactFormWrapper>
        </div>

    </StyledContact>;
}