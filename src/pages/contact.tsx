import React from 'react';

import { scaleUp } from 'components/Circles/keyframes';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import styled from 'styled-components';

const StyledContact = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

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

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const BigScreenTitle = styled.div`
  position: fixed;
  top: 50%;
  right: calc(50% + 200px);
  mix-blend-mode: difference;
  display: none;
  color: #ffffff;

  @media (min-height: 800px) {
    right: calc(50% + 120px);
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Title = styled.div`
  font-size: 2.8rem;
  visibility: visible;
  font-weight: 600;
  color: white;
  mix-blend-mode: difference;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 600;
  }
`;

const TitleHelloMessage = styled.div`
  font-size: clamp(1rem, 2vw, 1rem);
  font-weight: 400;
  color: #807F7F;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const TopCircle = styled.div`
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
  width: 100vw;
  height: 100vw;
  top: calc(-50vw + 100px);
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

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

const FormAndSocialMedia = styled.div`
  width: min(100%, 600px);
`;

export default function Contact() {

    return <StyledContact>

        <div className={'fixed top-0 left-0 z-0 h-screen w-screen'}>
            <BigScreenCircle/>
        </div>

        <BigScreenTitle>
            <Title>{'contact'}</Title>
            <div>
                <TitleHelloMessage>{'Would you like to work with me?'}</TitleHelloMessage>
                <TitleHelloMessage>{'Send a message!'}</TitleHelloMessage>
            </div>
        </BigScreenTitle>

        <FakeNavbar/>

        <FakeCircleBlock/>

        <TopCircle>
            <div className={'absolute bottom-[50px] flex flex-col gap-7'}>
                <Title>{'contact'}</Title>
                <div>
                    <TitleHelloMessage>{'Would you like to work with me?'}</TitleHelloMessage>
                    <TitleHelloMessage>{'Send a message!'}</TitleHelloMessage>
                </div>
            </div>
        </TopCircle>

        <div className={'flex w-full grow pt-7 md:pt-0'}>
            <LeftSide/>
            <RightSide>
                <FormAndSocialMedia>
                    <ContactForm/>
                    <div className={'mt-[20px] flex w-full justify-center sm:mt-[50px] md:mt-[50px]'}>
                        <SocialMedia title={'or check out my social media'}/>
                    </div>
                </FormAndSocialMedia>
            </RightSide>
        </div>

    </StyledContact>;
}