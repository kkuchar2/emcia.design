import React from 'react';

import { scaleUp } from 'components/Circles/keyframes';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import styled from 'styled-components';

import { useMailStore } from '../../../store/store';

const StyledContact = styled.div<{ mailSent: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${({ mailSent }) => (mailSent ? '100svh' : 'auto')};
  align-items: center;
  min-height: 100vh;
`;

const BigScreenTitle = styled.div`
  position: absolute;
  background: red;
  top: 55%;
  transform: translateY(-50%);
  left: calc(100% - 400px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  mix-blend-mode: difference;
  gap: 10px;
  width: 400px;

  @media (max-height: 768px) {
    top: 40%;
  }
`;

const Title = styled.div`
  visibility: visible;
  color: #e1e1e1;
  position: relative;
  font-size: clamp(2.8rem, 10vw, 5rem);
  font-weight: 600;
  text-align: left;
  line-height: normal;
`;

const TitleHelloMessage = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  color: #807F7F;
`;

const BigScreenCircle = styled.div`
  position: absolute;
  width: 160vh;
  height: 160vh;
  border-radius: 50%;
  background: #ffffff;
  right: calc(50% + 80px);
  bottom: calc(50% - 80vh);
  display: block;
  animation: ${scaleUp} 2200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

  @media (max-height: 768px) {
    width: 100vw;
    height: 100vw;
    bottom: calc(50% - 60vw);
  }
`;

const BigScreenCircle2 = styled.div`
  position: absolute;
  isolation: isolate;
  width: 160vh;
  height: 160vh;
  border-radius: 50%;
  right: calc(50% + 80px);
  bottom: calc(50% - 80vh);
  overflow: hidden;
  transition: bottom 0.5s ease;
  background: white;

  @media (max-height: 768px) {
    width: 100vw;
    height: 100vw;
    bottom: calc(50% - 60vw);
  }
`;

const BigScreenCircleWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100svh;
`;

const ConfirmationTitle = styled.div`
  font-size: clamp(1.2rem, 2vw, 2rem);
  font-weight: 600;
  color: white;
  mix-blend-mode: difference;
  text-align: center;
  transform: scale(0);
`;

const ConfirmationMessage = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  transform: scale(0);
`;

const Confirmation = styled.div<{ mailSent?: boolean }>`
  position: absolute;
  right: 0;
  z-index: 1;
  color: #ffffff;
  place-items: center;
  place-content: center;
  gap: 20px;
  display: grid;
  visibility: ${({ mailSent }) => mailSent ? 'visible' : 'hidden'};
  background: #1e1e1e;
  width: 50%;
  height: calc(100svh - 100px);
  top: 100px;
  padding-bottom: 50px;

  ${ConfirmationTitle} {
    transform: ${({ mailSent }) => mailSent ? 'scale(1)' : 'scale(0)'};
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  ${ConfirmationMessage} {
    transform: ${({ mailSent }) => mailSent ? 'scale(1)' : 'scale(0)'};
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const Line = styled.div`
  position: absolute;
  width: 2000px;
  height: 2px;
  top: 100px;
  background: white;
`;

export const ContactDesktop = () => {

    const mailSent = useMailStore(state => state.mailSent);
    const recentSender = useMailStore(state => state.recentSender);

    return <StyledContact mailSent={false}>

        <BigScreenCircleWrapper>
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
        </BigScreenCircleWrapper>

        <Confirmation mailSent={mailSent}>
            <div>
                <ConfirmationTitle>{'Thank you for your message'}</ConfirmationTitle>
                <ConfirmationTitle>{recentSender}</ConfirmationTitle>
            </div>
            <ConfirmationMessage>{'I will get back to you as soon as possible.'}</ConfirmationMessage>
        </Confirmation>

        <div className={'h-[100px] w-full'}/>

        <div className={'flex w-full grow pt-7 md:pt-0'}>
            <div className={'block w-2/3'}/>
            <div className={'grow-1 relative grid w-1/2 place-items-center p-4'}>
                <div className={'w-[min(100%,600px)]' + ` ${mailSent ? 'hidden' : 'block'}`}>
                    <ContactForm/>
                    <div className={'mt-[20px] flex w-full justify-center sm:mt-[50px] md:mt-[50px]'}>
                        <SocialMedia title={'or check out my social media'}/>
                    </div>
                </div>
            </div>
        </div>
    </StyledContact>;
};