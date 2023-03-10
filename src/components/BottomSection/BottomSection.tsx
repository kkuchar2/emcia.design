import { MadeBy } from 'components/MadeBy/MadeBy';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { ISize, useCurrentSize } from 'hooks/use-size';
import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div<ISize>`
  width: 100%;
  transform: scale(1);

  padding-top: 100%;
  border-radius: 50% 50% 0 0;
  background-color: #1e1e1e;
  color: #ffffff;
  position: absolute;

  @media (min-width: 768px) {
    transform: scale(calc(1 - var(--scale-bottom-circle, 1)));
  }
`;

const StyledContact = styled.div`
  opacity: calc(1 - 5 * var(--scale-bottom-circle, 1));
`;

const StyledBottomSection = styled.section<ISize>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
  overflow: hidden;
  height: ${({ width }) => width}px;
`;

const StyledBottomSectionWrapper = styled.div<ISize>`
  max-width: 1200px;
  width: calc(100% - 40px - 40px);
  height: ${({ width }) => 216 + 0.4 * width}px;
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

export const BottomSection = () => {

    const ref = useRef<HTMLDivElement>(null);

    const currentSize = useCurrentSize(ref);

    return <StyledBottomSection>
        <StyledBottomSectionWrapper ref={ref} {...currentSize}>
            <StyledCircle {...currentSize} />
            <StyledContact className={'xs:mt-[20%] absolute left-[50%] top-[10px] z-[1] mt-[30%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1'}>
                <div className={'text-lg font-semibold text-white sm:text-xl'}>{'Want to work together?'}</div>
                <div className={'text-[#BDBDBD]'}>{'Contact me!'}</div>
                <div className={'mt-2 text-sm font-semibold text-[#FF5C00]'}>
                    {'emilia.markiewicz@gmail.com'}
                </div>
            </StyledContact>
        </StyledBottomSectionWrapper>
        <div className={'absolute left-0 bottom-0 z-0 flex h-[216px] w-full flex-col items-center justify-center bg-[#1e1e1e]'}>
            <SocialMedia/>
            <MadeBy/>
        </div>
    </StyledBottomSection>;
};