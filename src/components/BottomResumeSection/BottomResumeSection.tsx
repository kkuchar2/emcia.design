import React from 'react';

import { MadeBy } from 'components/MadeBy/MadeBy';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import styled from 'styled-components';

const StyledBottomSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
  overflow: hidden;
  height: 100%;
`;

const Footer = styled.footer`
  left: 0;
  bottom: 0;
  display: flex;
  height: 216px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  padding-bottom: 30px;
  z-index: 1;
`;

const CircleWrapper = styled.div`
  width: 100vw;
  height: calc(100vw - min(216px, 50vw));
  max-width: calc(1500px - 40px - 40px);
  max-height: calc(1580px / 2 - 216px);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    background-color: #1e1e1e;
    border-radius: 50% 50% 0 0;
    width: 100vw;
    height: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(1500px - 40px - 40px);
    max-height: calc(1500px - 40px - 40px);
  }

  @media (min-width: 470px) {
    width: calc(100vw - 40px - 40px);
    height: 35vw;

    &:after {
      width: 100%;
      height: calc(100vw - 40px - 40px);
    }
  }

  @media (min-width: 768px) {
    width: calc(100vw - 40px - 40px);
    height: calc(50vw - 216px / 2);

    &:after {
      width: 100%;
      height: calc(100vw - 40px - 40px);
    }
  }

  @media (min-width: 1024px) {
    width: calc(100vw - 40px - 40px);
    height: calc(50vw - 216px / 2);

    &:after {
      width: calc(100vw - 40px - 40px);
      height: calc(100vw - 40px - 40px);
    }
  }
`;

const DownloadResumeTitle = styled.div`
  font-size: clamp(0.9em, 3.6vw, 2rem);
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #f1f1f1;
`;

const DownloadResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20%;
  z-index: 1;

  @media (min-width: 430px) {
    margin-top: 15%;
  }
`;

const ResumeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 20vw, 180px);
  height: 40px;
  border-radius: 50px;
  background: none;
  border: 1px solid #FF5C00;
  color: #FF5C00;
  font-size: clamp(0.8em, 2vw, 1rem);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 768px) {
    height: 50px;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #ffa671;
    color: #ffa671;
  }
`;

export const BottomResumeSection = () => {

    return <StyledBottomSection>
        <CircleWrapper>
            <DownloadResumeSection>
                <DownloadResumeTitle>{'Download my resume'}</DownloadResumeTitle>
                <ResumeButton href={'doc/CV-Emilia-Markiewicz.pdf'} target={'blank'} title={'Download my resume'}>
                    {'Click here'}
                </ResumeButton>
            </DownloadResumeSection>
        </CircleWrapper>
        <Footer>
            <SocialMedia/>
            <MadeBy/>
        </Footer>
    </StyledBottomSection>;
};