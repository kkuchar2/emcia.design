import React from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import styled from 'styled-components';

import { useMailStore } from '../../../store/store';

const StyledContact = styled.div<{ mailSent: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${({ mailSent }) => (mailSent ? '100dvh' : 'auto')};
  container-type: inline-size;
`;

const Title = styled.div`
  font-size: 2.8rem;
  visibility: visible;
  font-weight: 600;
  color: #e1e1e1;
  text-align: center;
  position: relative;
`;

const TitleHelloMessage = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  color: #807F7F;
  text-align: center;
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
  height: 100%;
  right: 0;
  z-index: 1;
  color: #ffffff;
  place-items: center;
  place-content: center;
  gap: 20px;
  display: grid;
  visibility: ${({ mailSent }) => mailSent ? 'visible' : 'hidden'};
  background: #1e1e1e;
  width: 100%;
  padding-bottom: 0;

  ${ConfirmationTitle} {
    transform: ${({ mailSent }) => mailSent ? 'scale(1)' : 'scale(0)'};
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  ${ConfirmationMessage} {
    transform: ${({ mailSent }) => mailSent ? 'scale(1)' : 'scale(0)'};
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (orientation: landscape) {
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100vw;
    background: #1e1e1e;
    padding-bottom: 0;
  }
`;

export const ContactMobile = () => {

    const mailSent = useMailStore(state => state.mailSent);
    const recentSender = useMailStore(state => state.recentSender);

    return <StyledContact mailSent={mailSent}>
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

        <Confirmation mailSent={mailSent}>
            <div>
                <ConfirmationTitle>
                    {'Thank you for your message'}
                </ConfirmationTitle>
                <ConfirmationTitle>
                    {recentSender}
                </ConfirmationTitle>
            </div>
            <ConfirmationMessage>{'I will get back to you as soon as possible.'}</ConfirmationMessage>
        </Confirmation>

        <div className={'grow-1 relative grid place-items-center p-5'}>
            <div className={'w-[min(100%,600px)]' + ` ${mailSent ? 'hidden' : 'block'}`}>
                <ContactForm/>
                <div className={'mt-[20px] flex w-full justify-center sm:mt-[50px] md:mt-[50px]'}>
                    <SocialMedia title={'or check out my social media'}/>
                </div>
            </div>
        </div>
    </StyledContact>;
};