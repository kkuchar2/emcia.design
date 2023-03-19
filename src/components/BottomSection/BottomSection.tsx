import React from 'react';

import { MadeBy } from 'components/MadeBy/MadeBy';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import styled from 'styled-components';

const StyledCircle = styled.div`
  width: 100%;
  transform: scale(1);
  padding-top: 100%;
  border-radius: 50%;
  background-color: #1f9926;
  color: #ffffff;
  position: absolute;
  z-index: 1;

  @media (min-width: 768px) {
    transform: scale(calc(1 - var(--scale-bottom-circle, 1)));
  }
`;

const StyledContact = styled.div`
  position: absolute;
  opacity: calc(1 - 5 * var(--scale-bottom-circle, 1));
  z-index: 2;
  bottom: 216px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  box-sizing: border-box;
  margin-top: 15%;
  background: rgba(255, 0, 0, 0.34);
  height: calc(216px + 40%);
  @media (min-width: 768px) {
    margin-top: 20%;
  }
`;

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

const StyledBottomSectionWrapper = styled.div`
  background: blue;
  max-width: 1200px;
  width: calc(100% - 40px - 40px);
  height: calc(216px + 40vw);
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    width: calc(100% - 40px - 40px);
  }

  @media (max-width: 640px) {
    width: calc(100% - 20px - 20px);
  }

  @media (max-width: 430px) {
    height: ${({ width }) => width + width / 4}px;
    width: 100%;
  }
`;

const StyledFooter = styled.footer`
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

const Top = styled.div`
  width: 100vw;
  height: calc(100vw - 216px / 2);
  background: rgba(172, 172, 172, 0.25);
  max-width: calc(1500px - 40px - 40px);
  max-height: calc(1580px / 2 - 216px);
  position: relative;

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

export const BottomSection = () => {

    return <StyledBottomSection>
        {/*<StyledBottomSectionWrapper>*/}
        {/*    <StyledContact>*/}
        {/*        <div className={'text-xl font-semibold text-white sm:text-xl'}>{'Want to work together?'}</div>*/}
        {/*        <div className={'text-xl text-[#BDBDBD]'}>{'Contact me!'}</div>*/}
        {/*        <div className={'mt-2 text-sm font-semibold text-[#FF5C00]'}>*/}
        {/*            {'emilia.markiewicz@gmail.com'}*/}
        {/*        </div>*/}
        {/*    </StyledContact>*/}
        {/*    <StyledCircle/>*/}
        {/*</StyledBottomSectionWrapper>*/}
        <Top>

        </Top>
        <StyledFooter>
            <SocialMedia/>
            <MadeBy/>
        </StyledFooter>
    </StyledBottomSection>;
};