import React, { useEffect, useRef, useState } from 'react';

import { GallerySlide } from 'components/Projects/GallerySlide';
import styled from 'styled-components';

import { DribbbleShot } from '../../portfolioConfig.types';

import 'flickity/dist/flickity.min.css';

interface GalleryCarouselProps {
    shots: DribbbleShot[]
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50vw;
  max-height: 500px;
`;

const StyledCarousel = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  .flickity-viewport {
    height: 100% !important;
  }

  .flickity-slider {
    width: 100% !important;
  }
`;

const GalleryCarousel = (props: GalleryCarouselProps) => {

    const { shots } = props;

    const flickityRef = useRef(null);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const Flickity = typeof window !== 'undefined' ? require('flickity') : null;

        flickityRef.current = new Flickity('.main-carousel', {
            wrapAround: true,
            freeScroll: true,
            pageDots: false,
        });

        flickityRef.current.on('staticClick', function (event, pointer, cellElement, cellIndex) {
            if (cellElement) {
                window.open(shots[cellIndex].link, '_blank');
            }
        });

        window.addEventListener('resize', () => {
            flickityRef.current.stopPlayer();
            flickityRef.current.resize();
        });

        setLoaded(true);

        return () => {
            if (flickityRef.current) {
                flickityRef.current.destroy();
            }
        };
    }, []);

    return <Container className={loaded ? '' : 'animate-pulse bg-gray-200'}>
        <StyledCarousel className={'main-carousel'}>
            {shots.map((shot, index) => <GallerySlide key={index} shot={shot}/>)}
        </StyledCarousel>
    </Container>;
};

export default GalleryCarousel;