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
  align-items: flex-end;
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
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

const ContactMe = styled.div`
  font-size: clamp(0.8rem, 3vw, 1.2rem);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #bdbdbd;
`;

export const BottomSection = () => {

    return <StyledBottomSection>
        <CircleWrapper>
            <div className={'z-40 mb-[2%] flex flex-col items-center gap-2 sm:mb-[10%]'}>
                <WorkTitle>{'Want to work together?'}</WorkTitle>
                <ContactMe>{'Contact me!'}</ContactMe>
                <div className={'mt-2 text-sm font-semibold text-[#FF5C00]'}>
                    {'emilia.markiewicz@gmail.com'}
                </div>
            </div>
        </CircleWrapper>
        <Footer>
            <SocialMedia/>
            <MadeBy/>
        </Footer>
    </StyledBottomSection>;
};