import React, { useEffect, useState } from 'react';

import { CompositionImage } from 'components/Image/CompositionImage';
import ReactPlayer from 'react-player';

import { DribbbleShot } from '../../portfolioConfig.types';

import 'flickity/dist/flickity.min.css';

import styles from './GallerySlide.module.scss';

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
        return <div className={['carousel-cell', styles.swiperSlide].join(' ')}>
            <div className={styles.mediaItem}>
                {hasWindow && <ReactPlayer url={videoUri} controls={false} muted={true} width={'100%'} height={'100%'} loop={true} playing={true} playsinline={true}/>}
            </div>
        </div>;
    }

    return <div className={['carousel-cell', styles.swiperSlide].join(' ')}>
        <div className={styles.mediaItem}>
            <CompositionImage
                show={true}
                alt={shot.name}
                images={[
                    {
                        src: shot.image,
                        sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 620px, 800px',
                        objectFit: 'cover',
                    }
                ]}
            />
        </div>
    </div>;
};

_GallerySlide.displayName = 'SwiperSlider';

export const GallerySlide = _GallerySlide;