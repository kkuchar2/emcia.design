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
    transform: translate(-50%);
    max-width: calc(1500px - 40px - 40px);
    max-height: calc(1500px - 40px - 40px);
  }

  @media (min-width: 470px) {
    width: calc(100vw - 40px - 40px);
    height: 35vw;

    &:after {
      width: 100%;
      height: calc(100vw - 40px - 40px);
      transform: translate(-50%, 0) scale(var(--scroll-progress, 1));
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

const WorkTitle = styled.h2`
  font-size: clamp(0.9em, 3.6vw, 2rem);
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: #f1f1f1;
  margin: 0;
  text-align: center;
  text-wrap: balance;
`;

const ContactMe = styled.p`
  font-size: clamp(0.9rem, 2.2vw, 1.25rem);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #C8C8C8;
  margin: 0;
`;

const Email = styled.a`
  margin-top: 10px;
  font-size: clamp(0.8rem, 2.2vw, 1.25rem);
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #FF5C00;
  text-decoration: none;
  outline: none;
  transition: color 200ms cubic-bezier(0.22, 1, 0.36, 1);

  @media (min-width: 768px) {
    margin-top: 24px;
  }

  &:hover {
    color: #ffa671;
  }

  &:focus-visible {
    color: #ffa671;
    box-shadow: 0 2px 0 0 #FF5C00;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 20%;
  z-index: 1;
  opacity: calc(1 - (1 - var(--scroll-progress, 1)) * 5);
  transform: none;

  @media (min-width: 430px) {
    margin-top: 15%;
  }

  @media (min-width: 768px) {
    transform: translateY(calc(300px * (1 - var(--scroll-progress, 1)) * 2)) scale(calc(1 - (1 - var(--scroll-progress, 1)) * 0.7));
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none !important;
  }
`;

export const BottomContactSection = () => {
    return <StyledBottomSection>
        <CircleWrapper>
            <ContactSection>
                <WorkTitle>{'Want to work together?'}</WorkTitle>
                <ContactMe>{'Contact me!'}</ContactMe>
                <Email href={'mailto:emilia.markiewicz@gmail.com'}>
                    {'emilia.markiewicz@gmail.com'}
                </Email>
            </ContactSection>
        </CircleWrapper>
        <Footer>
            <SocialMedia/>
            <MadeBy/>
        </Footer>
    </StyledBottomSection>;
};
