import React from 'react';

import { CustomInput } from 'components/CustomInput/CustomInput';
import { CustomTextArea } from 'components/CustomInput/CustomTextArea';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import styled from 'styled-components';

const StyledContact = styled.div`
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

const StyledTitle2 = styled.div`
  font-size: 2.8rem;
  visibility: visible;
  text-align: left;
  font-weight: 600;
  color: #1E1E1E;
  z-index: 4;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
`;

const StyledSubmitButton = styled.button`
  margin-top: 0;
  width: 200px;
  border-radius: 50px;
  background: #914f37;
  padding: 12px;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1rem;
  align-self: center;

  &:hover {
    background: #d0562a;
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

export default function Contact() {

    return <StyledContact>
        <FakeNavbar/>
        <FakeCirclePart/>
        <TopCircle>
            <div className={'absolute bottom-[80px] flex flex-col gap-7'}>
                <StyledTitle2 className={'text-5xl font-semibold text-white '}>{'contact me'}</StyledTitle2>
                <div className={'flex flex-col gap-1 text-[#807F7F]'}>
                    <div className={'flex w-full justify-center xl:justify-start'}>{'Do you want to work with me?'}</div>
                    <div className={'flex w-full justify-center xl:justify-start'}>{'Feel free to contact me!'}</div>
                </div>
            </div>
        </TopCircle>
        <div className={'flex w-full grow pt-7 md:pt-0'}>
            <LeftSide/>
            <RightSide>
                <Wrapper>
                    <StyledForm>
                        <CustomInput label={'Name'}/>
                        <CustomInput label={'Email'}/>
                        <CustomInput label={'Subject'}/>
                        <CustomTextArea label={'Message'}/>
                        <StyledSubmitButton>{'Send message'}</StyledSubmitButton>
                    </StyledForm>
                    <div className={'mt-[50px] flex w-full justify-center md:mt-[50px] lg:justify-start'}>
                        <SocialMedia title={'Or check out my social media'}/>
                    </div>
                </Wrapper>
            </RightSide>
        </div>
    </StyledContact>;
}