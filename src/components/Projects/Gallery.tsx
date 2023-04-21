import React, { useEffect, useRef } from 'react';

import { GallerySlide } from 'components/Projects/GallerySlide';
import styled from 'styled-components';

import { DribbleShot } from '../../portfolioConfig.types';

import 'flickity/dist/flickity.min.css';

interface GalleryCarouselProps {
    shots: DribbleShot[]
}

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  height: 300px;

  @media (min-width: 1024px) {
    height: 400px;
  }
`;

const GalleryCarousel = (props: GalleryCarouselProps) => {

    const { shots } = props;

    const flickityRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const Flickity = typeof window !== 'undefined' ? require('flickity') : null;

        flickityRef.current = new Flickity('.main-carousel', {
            wrapAround: true,
            pageDots: false,
            autoPlay: 2000
        });

        flickityRef.current.on('staticClick', function (event, pointer, cellElement, cellIndex) {
            if (cellElement) {
                window.open(shots[cellIndex].link, '_blank');
            }
        });

        return () => {
            if (flickityRef.current) {
                flickityRef.current.destroy();
            }
        };
    }, []);

    return <Container>
        <div className={'main-carousel'}>
            {shots.map((shot, index) => <GallerySlide key={index} shot={shot}/>)}
        </div>
    </Container>;
};

export default GalleryCarousel;