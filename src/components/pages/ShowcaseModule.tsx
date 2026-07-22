'use client';

import React, { useEffect, useRef, useState } from 'react';

import useIntersectionObserver from 'hooks/use-intersection';
import styled, { keyframes } from 'styled-components';

import type { ShowcaseAtmosphere, ShowcaseImage } from './ProjectShowcasePage';

type ShowcaseModuleProps = {
  image: ShowcaseImage;
  alt: string;
  atmosphere: ShowcaseAtmosphere;
  /** When false, the image src is not attached yet (sequential loader). */
  canLoad: boolean;
  onLoaded: () => void;
};

const SNAPSHOT_MAX_WIDTH = 1400;
const FADE_MS = 420;

const skeletonPulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.55;
  }
`;

const Frame = styled.div<{ $atmosphere: ShowcaseAtmosphere }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${({ $atmosphere }) => {
    if ($atmosphere === 'sciencelo') return '#649487';
    if ($atmosphere === 'candle') return '#efe6dc';
    return '#e6e6e6';
  }};
`;

const Skeleton = styled.div<{ $visible: boolean; $atmosphere: ShowcaseAtmosphere }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 200ms ease;
  background: ${({ $atmosphere }) => {
    if ($atmosphere === 'sciencelo') return '#649487';
    if ($atmosphere === 'candle') return '#efe6dc';
    return '#e6e6e6';
  }};
  animation: ${skeletonPulse} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** Sticky underlay — browsers discard decoded <img> bitmaps under memory pressure. */
const Snapshot = styled.canvas<{ $shown: boolean }>`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
`;

const Image = styled.img<{ $shown: boolean }>`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
  transition: opacity ${FADE_MS}ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

function paintSnapshot(img: HTMLImageElement, canvas: HTMLCanvasElement) {
  if (!img.naturalWidth || !img.naturalHeight) {
    return false;
  }

  const scale = Math.min(1, SNAPSHOT_MAX_WIDTH / img.naturalWidth);
  const width = Math.max(1, Math.round(img.naturalWidth * scale));
  const height = Math.max(1, Math.round(img.naturalHeight * scale));
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return false;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
  return true;
}

export const ShowcaseModule = ({
  image,
  alt,
  atmosphere,
  canLoad,
  onLoaded,
}: ShowcaseModuleProps) => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reportedLoad = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [hasSnapshot, setHasSnapshot] = useState(false);

  // Freeze after first show — reveal stays; canvas covers browser bitmap discard.
  const entry = useIntersectionObserver(frameRef, {
    threshold: 0.08,
    rootMargin: '10% 0px',
    freezeOnceVisible: true,
  });
  const inView = !!entry?.isIntersecting;

  const markLoaded = () => {
    setLoaded(true);
    if (!reportedLoad.current) {
      reportedLoad.current = true;
      onLoaded();
    }
  };

  useEffect(() => {
    if (!canLoad) {
      return;
    }

    const node = imgRef.current;
    if (node?.complete && node.naturalWidth > 0) {
      markLoaded();
    }
    // markLoaded/onLoaded intentionally omitted — only re-check when src attaches
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canLoad, image.src]);

  // Double rAF so opacity:0 paints first — cached hits otherwise skip the CSS fade.
  useEffect(() => {
    if (!loaded || !inView || revealed) {
      return;
    }

    let innerRaf = 0;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(() => {
        setRevealed(true);
      });
    });

    return () => {
      cancelAnimationFrame(outerRaf);
      cancelAnimationFrame(innerRaf);
    };
  }, [loaded, inView, revealed]);

  // Snapshot only after fade finishes so canvas does not flash under the transition.
  useEffect(() => {
    if (!revealed) {
      return;
    }

    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reduceMotion ? 0 : FADE_MS;

    const timer = window.setTimeout(() => {
      if (paintSnapshot(img, canvas)) {
        setHasSnapshot(true);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [revealed, image.src]);

  // Re-warm decode when scrolling back without React state churn.
  useEffect(() => {
    if (!loaded || !frameRef.current || !imgRef.current?.decode) {
      return;
    }

    const img = imgRef.current;
    const node = frameRef.current;
    const observer = new IntersectionObserver(
      ([next]) => {
        if (next?.isIntersecting) {
          void img.decode().catch(() => {
            // decode can reject while the bitmap is mid-discard; ignore
          });
        }
      },
      { threshold: 0.01, rootMargin: '25% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loaded, image.src]);

  return (
    <Frame
      ref={frameRef}
      $atmosphere={atmosphere}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <Skeleton $visible={!revealed} $atmosphere={atmosphere} aria-hidden={true} />
      <Snapshot ref={canvasRef} $shown={hasSnapshot} aria-hidden={true} />
      {canLoad && (
        <Image
          ref={imgRef}
          $shown={revealed}
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.sizes}
          width={image.width}
          height={image.height}
          alt={alt}
          loading={'eager'}
          fetchPriority={image.index === 1 ? 'high' : 'low'}
          decoding={'async'}
          onLoad={markLoaded}
          onError={markLoaded}
        />
      )}
    </Frame>
  );
};
