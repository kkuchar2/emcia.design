'use client';

import React, { useCallback, useMemo, useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

const Skeleton = styled.div<{ $loaded?: boolean }>`
  width: 100%;
  height: 100%;
  display: ${({ $loaded }) => $loaded ? 'none' : 'block'};

  @keyframes alternateOpacity {
    0%, 100% {
      opacity: 1
    }
    50% {
      opacity: 0.3
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(230, 230, 230);
    animation: alternateOpacity 3s ease infinite;
  }
`;

const Background = styled.div<{ $show?: boolean, $background?: string, $loaded?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ $background }) => $background};
  opacity: ${({ $show, $loaded }) => $show && $loaded ? 1 : 0};
  transition: opacity 0.3s ease;
`;

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
            onLoad={() => {
                setImagesLoaded(prev => prev + 1);
            }}
        />;
    }, [allImagesLoaded]);

    return <div className={'relative h-full w-full'}>
        <div className={'absolute left-0 top-0 h-full w-full animate-showDelay opacity-[0.001]'}>
            <Skeleton $loaded={allImagesLoaded}/>
        </div>
        <Background $background={background} $show={show} $loaded={allImagesLoaded}/>
        {images && images.map(singleImage)}
    </div>;
};