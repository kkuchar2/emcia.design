'use client';

import React, { useCallback, useMemo, useState } from 'react';

import Image from 'next/image';

import styles from './CompositionImage.module.scss';

interface SingleImage {
    src: string;
    sizes?: string;
    objectFit?: 'cover' | 'contain';
    style?: React.CSSProperties;
}

interface ImageWithStateProps {
    alt: string;
    show?: boolean;
    background?: string;
    images?: SingleImage[];
    objectFit?: 'cover' | 'contain';
    className?: string;
}

export const CompositionImage = (props: ImageWithStateProps) => {

    const { show, alt, background, images } = props;

    const validImages = useMemo(() => images?.filter(image => !!image.src), [images]);

    const [imagesLoaded, setImagesLoaded] = useState(0);

    const allImagesLoaded = useMemo(() => {
        return imagesLoaded === validImages?.length;
    }, [imagesLoaded, validImages]);

    const singleImage = useCallback((image: SingleImage, index: number) => {
        const { src, objectFit, sizes, style } = image;

        if (!src) {
            return null;
        }

        return <Image
            key={index}
            src={src}
            sizes={sizes}
            fill={true}
            alt={alt}
            priority={true}
            title={alt}
            style={{
                objectFit: objectFit || 'cover',
                ...style
            }}
            onLoadingComplete={() => {
                setImagesLoaded(prev => prev + 1);
            }}
        />;
    }, [allImagesLoaded]);

    return <div className={'relative h-full w-full'}>
        <div className={'absolute left-0 top-0 h-full w-full animate-showDelay opacity-[0.001]'}>
            <div className={[styles.skeleton, allImagesLoaded ? styles.loaded : ''].join(' ')}/>
        </div>
        <div className={[styles.background, show && allImagesLoaded ? [styles.show, styles.loaded].join(' ') : ''].join(' ')}
            style={{
                background: background
            }}>
            {images && images.map(singleImage)}
        </div>
    </div>;
};