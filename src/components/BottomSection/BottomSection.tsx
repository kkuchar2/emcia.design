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
  z-index: 0;
  display: flex;
  height: 216px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  padding-bottom: 30px;
`;

const CircleWrapper = styled.div`
  width: 100vw;
  height: calc(100vw - 216px / 2);
  max-width: calc(1500px - 40px - 40px);
  max-height: calc(1580px / 2 - 216px);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    background: #1e1e1e;
    border-radius: 50% 50% 0 0;
    width: 100vw;
    height: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(1500px - 40px - 40px);
    max-height: calc(1500px - 40px - 40px);
  }

  @media (min-width: 430px) {
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

const WorkTitle = styled.div`
  font-size: clamp(1rem, 3vw, 1.75rem);
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #f1f1f1;
`;

const ContactMe = styled.div`
  font-size: clamp(0.9rem, 2.2vw, 1.25rem);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #bdbdbd;
`;

const Email = styled.div`
  margin-top: 10px;
  font-size: clamp(0.8rem, 2.2vw, 1.25rem);
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #FF5C00;

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

const ContactSection = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 20%;

  @media (min-width: 430px) {
    margin-top: 15%;
  }
`;

export const BottomSection = () => {

    return <StyledBottomSection>
        <CircleWrapper>
            <ContactSection>
                <WorkTitle>{'Want to work together?'}</WorkTitle>
                <ContactMe>{'Contact me!'}</ContactMe>
                <Email>{'emilia.markiewicz@gmail.com'}</Email>
            </ContactSection>
        </CircleWrapper>
        <Footer>
            <SocialMedia/>
            <MadeBy/>
        </Footer>
    </StyledBottomSection>;
};