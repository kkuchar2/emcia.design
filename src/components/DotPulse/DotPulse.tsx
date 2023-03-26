import React from 'react';

import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Dot = styled.div`
  animation: ${anim} 1s ease-in-out infinite;
  background-color: #d0562a;
  border-radius: 5px;
  height: 10px;
  width: 10px;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const DotPulseWrapper = styled.div<DotPulseProps>`
  display: inline-flex;
  transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: ${({ visible }) => visible ? '1' : '0'};
  width: ${({ visible }) => visible ? '40px' : '0'};
  overflow: hidden;
`;

const DotWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

interface DotPulseProps {
    visible: boolean;
}

export const DotPulse = (props: DotPulseProps) => {

    const { visible } = props;

    return <DotPulseWrapper visible={visible}>
        <DotWrapper>
            <Dot/>
            <Dot/>
            <Dot/>
        </DotWrapper>
    </DotPulseWrapper>;
};