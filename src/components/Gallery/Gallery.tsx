import React, { useEffect, useRef, useState } from 'react';

import { DribbbleShot } from '../../portfolioConfig.types';

import styles from './Gallery.module.scss';
import { GallerySlide } from './GallerySlide';

import 'flickity/dist/flickity.min.css';

interface GalleryCarouselProps {
    shots: DribbbleShot[]
}

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

    return <div className={[styles.gallery, loaded ? styles.loaded : ''].join(' ')}>
        <div className={['main-carousel', styles.carousel].join(' ')}>
            {shots.map((shot, index) => <GallerySlide key={index} shot={shot}/>)}
        </div>
    </div>;
};

export default GalleryCarousel;