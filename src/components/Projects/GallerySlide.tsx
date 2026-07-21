import React, { useEffect, useState } from 'react';

import { CompositionImage } from 'components/Image/AppImage';
import ReactPlayer from 'react-player';
import styled, { keyframes } from 'styled-components';

import { DribbbleShot } from '../../portfolioConfig.types';

import 'flickity/dist/flickity.min.css';

const ImageWrapper = styled.div`
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background: rgb(230, 230, 230);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSwiperSlide = styled.a`
  aspect-ratio: 4/3;
  height: 100%;
  margin-right: 20px;
  counter-increment: carousel-cell;
  animation: ${fadeIn} 1s ease-in-out;
  display: block;
  text-decoration: none;
  color: inherit;
  outline: none;
  cursor: pointer;

  &:focus-visible {
    box-shadow: inset 0 0 0 3px #1e1e1e;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
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
        return <StyledSwiperSlide
            className={'carousel-cell'}
            href={shot.link}
            target={'_blank'}
            rel={'noopener noreferrer'}
            title={shot.name}
            aria-label={`Open on Dribbble: ${shot.name}`}
        >
            <ImageWrapper>
                {hasWindow && (
                    <ReactPlayer
                        src={videoUri}
                        controls={false}
                        muted
                        width={'100%'}
                        height={'100%'}
                        loop
                        playing
                        playsInline
                    />
                )}
            </ImageWrapper>
        </StyledSwiperSlide>;
    }

    return <StyledSwiperSlide
        className={'carousel-cell'}
        href={shot.link}
        target={'_blank'}
        rel={'noopener noreferrer'}
        title={shot.name}
        aria-label={`Open on Dribbble: ${shot.name}`}
    >
        <ImageWrapper>
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

_GallerySlide.displayName = 'GallerySlide';

export const GallerySlide = _GallerySlide;
