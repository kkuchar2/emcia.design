import React, { useCallback } from 'react';

import { scaleUp } from 'components/Circles/keyframes';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import styled from 'styled-components';

const StyledContact = styled.div<{ mailSent: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${({ mailSent }) => (mailSent ? '100svh' : 'auto')};

  @media (min-width: 1024px) {
    align-items: center;
    min-height: 100vh;
  }
`;

const LeftSide = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: calc(50%);
  }
`;

const RightSide = styled.div`
  display: grid;
  place-items: center;
  padding: 30px;
  flex-grow: 1;
  position: relative;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const BigScreenTitle = styled.div`
  position: fixed;
  top: 50%;
  right: calc(50% + 200px);
  display: none;
  mix-blend-mode: difference;

  @media (min-height: 800px) {
    right: calc(50% + 120px);
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Title = styled.div`
  font-size: 2.8rem;
  visibility: visible;
  font-weight: 600;
  color: #e1e1e1;
  text-align: center;
  position: relative;

  @media (min-width: 1024px) {
    font-size: clamp(2.8rem, 10vw, 5rem);
    font-weight: 600;
    text-align: left;
    margin-left: -4px;
  }
`;

const TitleHelloMessage = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  color: #807F7F;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const TopCircle = styled.div<{ mailSent: boolean }>`
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
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

  @media (min-width: 1024px) {
    display: none;
  }
`;

const FakeNavbar = styled.div`
  height: 100px;
  width: 100%;
  min-height: 100px;
  background: white;

  @media (min-width: 1024px) {
    background: none;
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

  @media (min-width: 1024px) {
    display: none;
  }
`;

const BigScreenCircle = styled.div`
  position: absolute;
  width: 160vh;
  height: 160vh;
  border-radius: 50%;
  background: #ffffff;
  right: calc(50%);
  bottom: calc(50% - 80vh);
  display: none;

  @media (max-height: 768px) {
    width: 100vw;
    height: 100vw;
    bottom: calc(50% - 70vw);
    right: calc(50% + 80px);
  }

  @media (min-width: 1024px) {
    display: block;
    animation: ${scaleUp} 2200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }
`;

const FormAndSocialMedia = styled.div<{ mailSent: boolean }>`
  width: min(100%, 600px);
  display: ${({ mailSent }) => mailSent ? 'none' : 'block'};
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

  @media (min-width: 1024px) {
    width: 50%;
    height: calc(100svh - 100px);
    top: 100px;
    padding-bottom: 50px;
  }

  @media (orientation: landscape) and (max-width: 1024px) {
    top: 0;
    left: 0;
    height: 100svh;
    width: 100vw;
    background: #1e1e1e;
    padding-bottom: 0;
  }
`;

export default function Contact() {

    const [mailSent, setMailSent] = React.useState(false);

    const onMailSent = useCallback(() => {
        setMailSent(true);
    }, []);

    return <StyledContact mailSent={mailSent}>

        <BigScreenCircleWrapper>
            <BigScreenCircle/>
        </BigScreenCircleWrapper>

        <BigScreenTitle>
            <Title>{'contact'}</Title>
            <div>
                <TitleHelloMessage>{'Would you like to work with me?'}</TitleHelloMessage>
                <TitleHelloMessage>{'Send a message!'}</TitleHelloMessage>
            </div>
        </BigScreenTitle>

        <FakeNavbar/>

        <FakeCircleBlock/>

        <TopCircle mailSent={mailSent}>
            <div className={'absolute bottom-[50px] flex flex-col gap-2 mix-blend-difference'}>
                <Title>{'contact'}</Title>
                <div>
                    <TitleHelloMessage>{'Would you like to work with me?'}</TitleHelloMessage>
                    <TitleHelloMessage>{'Send a message!'}</TitleHelloMessage>
                </div>
            </div>
        </TopCircle>

        <Confirmation mailSent={mailSent}>
            <ConfirmationTitle>
                {'Thank you for your message, Krzysztof!'}
            </ConfirmationTitle>
            <ConfirmationMessage>
                {'I will get back to you as soon as possible.'}
            </ConfirmationMessage>
        </Confirmation>

        <div className={'flex w-full grow pt-7 md:pt-0'}>
            <LeftSide/>
            <RightSide>
                <FormAndSocialMedia mailSent={mailSent}>
                    <ContactForm onMailSent={onMailSent}/>
                    <div className={'mt-[20px] flex w-full justify-center sm:mt-[50px] md:mt-[50px]'}>
                        <SocialMedia title={'or check out my social media'}/>
                    </div>
                </FormAndSocialMedia>
            </RightSide>
        </div>
    </StyledContact>;
}