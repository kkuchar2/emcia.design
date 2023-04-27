import React from 'react';

import GalleryCarousel from 'components/Projects/Gallery';
import styled from 'styled-components';

import { DribbleShotsConfig } from '../../portfolioConfig.types';

const StyledDribbleShots = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
  width: 100%;
  overflow: hidden;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    margin-top: 160px;
    justify-content: center;
    gap: 80px;
  }
`;

const Title = styled.div`
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.06em;
  color: #1e1e1e;
`;

const SecondaryTitle = styled.div`
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  color: #807F7F;
  font-weight: 400;
  letter-spacing: -0.02em;
  max-width: 400px;
`;

export const DribbleShotsView = (props: DribbleShotsConfig) => {

    const { title, secondaryTitle, shots } = props;

    return <StyledDribbleShots>
        <div className={'flex w-full max-w-[1500px] flex-col gap-2 px-[40px]'}>
            <Title>{title}</Title>
            <SecondaryTitle>{secondaryTitle}</SecondaryTitle>
        </div>
        <div className={'flex w-full max-w-[2500px] xl:px-[40px]'}>
            <GalleryCarousel shots={shots}/>
        </div>
    </StyledDribbleShots>;
};
