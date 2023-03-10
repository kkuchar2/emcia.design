import { CustomInput } from 'components/CustomInput/CustomInput';
import { CustomTextArea } from 'components/CustomInput/CustomTextArea';
import { useScreenWidth } from 'hooks/use-screen';
import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
  width: 140vh;
  height: 140vh;
  bottom: -25vh;
  right: 50px;
  z-index: 1;
  max-width: max(2400px, 100vh);
  max-height: max(2400px, 100vh);
  transition: all 0.5s ease-in-out;

  transform: scale(0);

  @media (min-width: 768px) {
    @keyframes circle {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }

    animation: circle 2200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }
`;

const StyledContactCircleWrapper = styled.div`

  @keyframes widthIncrease {
    0% {
      width: 0;
      opacity: 0;
    }
    100% {
      width: 50%;
      opacity: 1;
    }
  }

  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 0;
  overflow: hidden;

  @media (min-width: 1200px) {
    animation: widthIncrease 1800ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    overflow: visible;
  }
`;

const StyledFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 0;

  @media (min-width: 1200px) {
    width: 50%;
    margin-right: 50px;
  }
`;

const StyledTitle = styled.div`
  visibility: visible;
  font-size: 4rem;
  position: absolute;
  bottom: 40%;
  transform: translateY(50%);
  right: 10%;
  z-index: 3;
  animation: scaleIn 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  mix-blend-mode: difference;
  color: #ffffff;
`;

const StyledTitle2 = styled.div`
  font-size: 1.8rem;
  visibility: visible;
  text-align: left;
  padding: 0;
  font-weight: 700;

  @media (min-width: 1200px) {
    visibility: hidden;
    padding: 50px 20px;
  }
`;

const StyledContact = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 1200px) {
    overflow: hidden;
    height: 100vh;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 2;

  @media (min-width: 1200px) {
    position: absolute;
    height: calc(100vh - 100px);
    top: 100px;
    align-items: center;
    overflow: visible;
  }
`;

const StyledForm = styled.form`
  width: min(100%, 500px);
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  padding: 20px;
`;

const StyledSubmitButton = styled.button`
  margin-top: 0;
  width: 100%;
  border-radius: 8px;
  background: #914f37;
  padding: 12px;
  font-weight: 700;
  color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background: #d0562a;
  }

  @media (min-width: 768px) {
    width: 40%;
    margin-top: 40px;
    border-radius: 50px;
    font-size: 0.9rem;
  }
`;

export default function Contact() {

    const screenWidth = useScreenWidth();

    return <StyledContact>
        <StyledWrapper>
            {screenWidth > 768 && <StyledContactCircleWrapper>
                <StyledTitle>
                    <h1 className={'w-[400px] font-semibold'}>{'contact me'}</h1>
                </StyledTitle>
                <Circle/>
            </StyledContactCircleWrapper>}
            <StyledFormWrapper>
                <StyledForm>
                    <StyledTitle2 className={'text-5xl font-semibold text-white '}>{'contact me'}</StyledTitle2>
                    <CustomInput label={'Name'}/>
                    <CustomInput label={'Email'}/>
                    <CustomInput label={'Subject'}/>
                    <CustomTextArea label={'Message'}/>
                    <StyledSubmitButton>{'Send message'}</StyledSubmitButton>
                </StyledForm>
            </StyledFormWrapper>
        </StyledWrapper>
    </StyledContact>;
}