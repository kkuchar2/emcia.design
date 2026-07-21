import React, { useEffect, useRef, useState } from 'react';

import { GallerySlide } from 'components/Projects/GallerySlide';
import styled from 'styled-components';

import { DribbbleShot } from '../../portfolioConfig.types';

import 'flickity/dist/flickity.min.css';

interface GalleryCarouselProps {
    shots: DribbbleShot[];
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50vw;
  max-height: 500px;
  background: rgb(230, 230, 230);
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

  .flickity-button:focus-visible {
    outline: 2px solid #1e1e1e;
    outline-offset: 2px;
  }
`;

const GalleryCarousel = (props: GalleryCarouselProps) => {
    const { shots } = props;
    const flickityRef = useRef<{ destroy: () => void; stopPlayer: () => void; resize: () => void } | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const Flickity = require('flickity');

        const flickity = new Flickity('.main-carousel', {
            wrapAround: true,
            freeScroll: true,
            pageDots: false,
            accessibility: true,
        });

        flickityRef.current = flickity;

        const onResize = () => {
            if (!flickityRef.current) {
                return;
            }

            flickityRef.current.stopPlayer();
            flickityRef.current.resize();
        };

        window.addEventListener('resize', onResize);
        setLoaded(true);

        return () => {
            window.removeEventListener('resize', onResize);
            if (flickityRef.current) {
                flickityRef.current.destroy();
                flickityRef.current = null;
            }
        };
    }, []);

    return <Container className={loaded ? '' : 'animate-pulse'}>
        <StyledCarousel
            className={'main-carousel'}
            role={'region'}
            aria-roledescription={'carousel'}
            aria-label={'Dribbble shots'}
        >
            {shots.map((shot) => <GallerySlide key={shot.link} shot={shot}/>)}
        </StyledCarousel>
    </Container>;
};

export default GalleryCarousel;
