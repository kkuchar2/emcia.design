import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import 'flickity/dist/flickity.min.css';

import { DribbbleShot } from '../../portfolioConfig.types';

const ImageWrapper = styled.div`
  aspect-ratio: 4/3;
  width: 100%;
`;

const StyledSwiperSlide = styled.div`
  width: 60%;
  height: 300px;
  margin-right: 20px;
  border-radius: 5px;
  counter-increment: carousel-cell;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    height: 400px;
    width: 40%;
  }

  &:before {
    display: block;
    text-align: center;
    content: counter(carousel-cell);
    line-height: 300px;
    font-size: 80px;
    color: white;

    @media (min-width: 1024px) {
      line-height: 400px;
    }
  }
`;

interface GallerySlideProps {
    shot: DribbbleShot;
}

const _GallerySlide = (props: GallerySlideProps) => {

    const { shot } = props;

    const img = require(`/public/images/${shot.image}`);

    return <StyledSwiperSlide className={'carousel-cell'}>
        <ImageWrapper>
            <Image
                src={img}
                alt={shot.name}
                title={shot.name}
                loading={'lazy'}
                fill={true}
                sizes={'(min-width: 60em) 50vw, (min-width: 28em) 45vw, 80vw'}
                style={{ objectFit: 'contain' }}
                quality={100}
            />
        </ImageWrapper>
    </StyledSwiperSlide>;
};

_GallerySlide.displayName = 'SwiperSlider';

export const GallerySlide = _GallerySlide;