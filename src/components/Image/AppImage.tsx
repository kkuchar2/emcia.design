'use client';

import React, { useState } from 'react';

import { ImageSkeleton } from 'components/Skeleton/ImageSkeleton';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

interface ImageWithStateProps extends ImageProps {
    isVisible?: boolean;
    overlayImageSrc?: any;
    background?: string;
    objectFit?: 'cover' | 'contain';
    className?: string;
}

const StyledImageBackground = styled.div<{ isVisible?: boolean, background?: string }>`
  width: 100%;
  height: 100%;

  &:after, &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity 2s ease;
  }

  &:after {
    background: ${({ background }) => background};
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  }

  &:before {
    background: transparent;
    opacity: ${({ isVisible }) => isVisible ? 0 : 1};
  }
`;

function ImageWithState(props: ImageWithStateProps): JSX.Element {
    const [loading, setLoading] = useState(true);
    const [loadingOverlayImage, setLoadingOverlayImage] = useState(true);

    const { src, alt, style, objectFit, isVisible, background, overlayImageSrc, ...rest } = props;

    const finalStyle = {
        ...style,
        opacity: loading ? 0 : 1,
        objectFit: objectFit || 'cover',
    };

    const imagePath = src ? `/images/${src}` : null;
    const overlayImagePath = overlayImageSrc ? `/images/${overlayImageSrc}` : null;

    return <div className={'relative h-full w-full'}>
        <ImageSkeleton
            loading={loading && (loadingOverlayImage || !overlayImageSrc) && !isVisible}/>
        <StyledImageBackground isVisible={isVisible} background={background}/>
        {imagePath && <Image
            {...rest}
            alt={alt}
            src={imagePath}
            style={finalStyle}
            onLoadingComplete={() => setLoading(false)}
        />}
        {overlayImagePath && <Image
            src={overlayImagePath}
            loading={'eager'}
            alt={`Open in Behance - ${alt}`}
            title={`Open in Behance - ${alt}`}
            fill={true}
            onLoadingComplete={() => setLoadingOverlayImage(false)}
            sizes={'(max-width: 768px) 100vw, (max-width: 1024px) 620px, 800px'}
            priority={true}
            quality={100}
            style={{
                objectFit: objectFit || 'cover',
                transition: 'transform 2s cubic-bezier(0.075, 0.82, 0.165, 1) 300ms, opacity 2s ease',
                transform: isVisible ? `translateY(-20px) scale(${1.2})` : 'translateY(400px) scale(2)'
            }}/>}
    </div>;
}

export { ImageWithState };
