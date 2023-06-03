import React, { useEffect, useState } from 'react';

import { CompositionImage } from 'components/Image/AppImage';
import styled, { keyframes } from 'styled-components';

import { DribbbleShot } from '../../portfolioConfig.types';

import 'flickity/dist/flickity.min.css';

const ImageWrapper = styled.div`
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSwiperSlide = styled.div`
  aspect-ratio: 4/3;
  height: 100%;
  margin-right: 20px;
  counter-increment: carousel-cell;
  animation: ${fadeIn} 1s ease-in-out;
`;

interface GallerySlideProps {
    shot: DribbbleShot;
}

const _GallerySlide = (props: GallerySlideProps) => {

    const [hasWindow, setHasWindow] = useState(false);

    const { shot } = props;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
        }
    }, []);

    const videoUri = shot.video;

    if (videoUri) {
        return <StyledSwiperSlide className={'carousel-cell'}>

            <ImageWrapper className={'bg-gray-200'}>
                {hasWindow && <video autoPlay={true} loop={true} muted={true} playsInline={true}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}>
                    <source src={videoUri} type={'video/mp4'}/>
                </video>}
            </ImageWrapper>
        </StyledSwiperSlide>;
    }

    return <StyledSwiperSlide className={'carousel-cell'}>
        <ImageWrapper className={'bg-gray-200'}>
            <CompositionImage
                alt={shot.name}
                images={[
                    {
                        src: shot.image,
                        sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 620px, 800px',
                        objectFit: 'cover',
                    }
                ]}
            />
        </ImageWrapper>
    </StyledSwiperSlide>;
};

_GallerySlide.displayName = 'SwiperSlider';

export const GallerySlide = _GallerySlide;