import React from 'react';

import { scaleUp } from 'components/Circles/keyframes';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import styled from 'styled-components';

const StyledContact = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    align-items: center;
    height: 100vh;
  }
`;

const LeftSide = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 0;
  overflow: visible;

  @media (min-width: 1024px) {
    display: flex;
    width: 50%;
    opacity: 1;
    height: 100%;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: min(100%, 600px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    margin-top: 0;
    padding-bottom: 0;
  }
`;

const StyledMobileTitle = styled.div`
  font-size: 2.8rem;
  visibility: visible;
  font-weight: 600;
  color: #1E1E1E;
  z-index: 4;
  text-align: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledDesktopTitlePart = styled.div`
  position: fixed;
  top: 50%;
  right: calc(50% + 200px);
  mix-blend-mode: difference;

  z-index: 4;

  display: none;
  color: #ffffff;

  @media (min-height: 800px) {
    right: calc(50% + 120px);
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

const StyledDesktopTitle = styled.div`
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 600;
`;

const StyledDesktopTitleDescription = styled.div`
  font-size: clamp(1rem, 2vw, 1rem);
  font-weight: 400;
  color: #898989;
  display: none;

  @media (min-width: 1024px) {
    display: block;
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
  z-index: 1;
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

const FakeCirclePart = styled.div`
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

const DesktopCircle = styled.div`
  position: absolute;
  width: 160vh;
  height: 160vh;
  border-radius: 50%;
  background: #ffffff;
  right: calc(50% + 80px);
  bottom: calc(50% - 80vh);
  display: none;

  @media (max-height: 768px) {
    width: 100vw;
    height: 100vw;
    bottom: calc(50% - 70vw);
  }

  @media (min-width: 1024px) {
    display: block;
    animation: ${scaleUp} 2200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }
`;

export default function Contact() {

    return <StyledContact>
        <div className={'fixed top-0 left-0 z-0 h-screen w-screen'}>
            <DesktopCircle/>
        </div>
        <StyledDesktopTitlePart>
            <StyledDesktopTitle>{'contact'}</StyledDesktopTitle>
            <StyledDesktopTitleDescription>{'Would you like to work with me?'}</StyledDesktopTitleDescription>
            <StyledDesktopTitleDescription>{'Send a message!'}</StyledDesktopTitleDescription>
        </StyledDesktopTitlePart>
        <FakeNavbar/>
        <FakeCirclePart/>

        <TopCircle>
            <div className={'absolute bottom-[50px] flex flex-col gap-7'}>
                <StyledMobileTitle>{'contact'}</StyledMobileTitle>
                <div className={'flex flex-col gap-1 text-[#807F7F]'}>
                    <div className={'flex w-full justify-center xl:justify-start'}>{'Would you like to work with me?'}</div>
                    <div className={'flex w-full justify-center xl:justify-start'}>{'Send a message!'}</div>
                </div>
            </div>
        </TopCircle>
        <div className={'flex w-full grow pt-7 md:pt-0'}>
            <LeftSide/>
            <RightSide>
                <Wrapper>
                    <ContactForm/>
                    <div className={'mt-[20px] flex w-full justify-center sm:mt-[50px] md:mt-[50px]'}>
                        <SocialMedia title={'or check out my social media'}/>
                    </div>
                </Wrapper>
            </RightSide>
        </div>
    </StyledContact>;
}