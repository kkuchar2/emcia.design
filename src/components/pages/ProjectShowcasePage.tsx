'use client';

import React, { useCallback, useState } from 'react';

import { BottomContactSection } from 'components/BottomContactSection/BottomContactSection';
import { ShowcaseModule } from 'components/pages/ShowcaseModule';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

export type ShowcaseImage = {
  index: number;
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
};

export type ShowcaseAtmosphere = 'default' | 'candle' | 'sciencelo';

type ProjectShowcasePageProps = {
  title: string;
  subtitle: string;
  images: ShowcaseImage[];
  galleryLabel: string;
  atmosphere?: ShowcaseAtmosphere;
};

const candleFlicker = keyframes`
  0%, 100% {
    opacity: 0.45;
    transform: translate3d(0, 0, 0) scale(1);
  }
  25% {
    opacity: 0.65;
    transform: translate3d(0.6%, -0.4%, 0) scale(1.03);
  }
  50% {
    opacity: 0.38;
    transform: translate3d(-0.5%, 0.4%, 0) scale(0.98);
  }
  75% {
    opacity: 0.58;
    transform: translate3d(0.3%, 0.2%, 0) scale(1.015);
  }
`;

const candleFlickerSoft = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.48;
  }
  70% {
    opacity: 0.22;
  }
`;

const pageBackground = (atmosphere: ShowcaseAtmosphere) => {
  switch (atmosphere) {
    case 'candle':
      return '#faf8f5';
    case 'sciencelo':
      return '#71A495';
    default:
      return '#f1f1f1';
  }
};

const Page = styled.main<{ $atmosphere: ShowcaseAtmosphere }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  isolation: isolate;
  background: ${({ $atmosphere }) => pageBackground($atmosphere)};
`;

const Atmosphere = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background:
    radial-gradient(ellipse 90% 60% at 50% -5%, rgba(255, 210, 150, 0.35), transparent 68%),
    radial-gradient(ellipse 55% 40% at 12% 45%, rgba(255, 190, 140, 0.18), transparent 70%),
    radial-gradient(ellipse 50% 35% at 88% 60%, rgba(255, 175, 120, 0.14), transparent 65%),
    #faf8f5;
`;

const Glow = styled.div<{ $variant: 'main' | 'side' | 'ember' }>`
  position: absolute;
  border-radius: 50%;
  filter: blur(56px);
  will-change: opacity, transform;

  ${({ $variant }) =>
    $variant === 'main' &&
    css`
      top: -10%;
      left: 50%;
      width: min(95vw, 780px);
      height: min(95vw, 780px);
      transform: translateX(-50%);
      background: radial-gradient(
        circle,
        rgba(255, 220, 160, 0.7) 0%,
        rgba(255, 190, 120, 0.35) 35%,
        rgba(255, 170, 100, 0.1) 58%,
        transparent 72%
      );
      animation: ${candleFlicker} 4.6s ease-in-out infinite;
    `}

  ${({ $variant }) =>
    $variant === 'side' &&
    css`
      top: 30%;
      left: 4%;
      width: min(48vw, 380px);
      height: min(48vw, 380px);
      background: radial-gradient(
        circle,
        rgba(255, 200, 140, 0.45) 0%,
        rgba(255, 175, 110, 0.16) 45%,
        transparent 70%
      );
      animation: ${candleFlickerSoft} 5.8s ease-in-out infinite;
      animation-delay: -1.4s;
    `}

  ${({ $variant }) =>
    $variant === 'ember' &&
    css`
      top: 55%;
      right: 4%;
      width: min(42vw, 320px);
      height: min(42vw, 320px);
      background: radial-gradient(
        circle,
        rgba(255, 185, 120, 0.4) 0%,
        rgba(255, 160, 90, 0.12) 50%,
        transparent 70%
      );
      animation: ${candleFlickerSoft} 4s ease-in-out infinite;
      animation-delay: -2.1s;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.4;
    transform: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const introReveal = keyframes`
  from {
    opacity: 0.001;
    transform: translate3d(0, 28px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Intro = styled.header<{ $atmosphere: ShowcaseAtmosphere }>`
  width: 100%;
  max-width: 1400px;
  padding: 120px 24px 40px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 140px 40px 56px;
  }

  ${({ $atmosphere }) =>
    $atmosphere === 'candle' &&
    css`
      text-shadow: 0 0 48px rgba(255, 200, 130, 0.25);
    `}
`;

const TitleRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
`;

const BackButton = styled(Link)<{ $atmosphere: ShowcaseAtmosphere }>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: #1e1e1e;
  background: ${({ $atmosphere }) =>
    $atmosphere === 'sciencelo' ? 'rgba(30, 30, 30, 0.08)' : 'rgba(30, 30, 30, 0.06)'};
  transition: background 160ms ease;

  &:hover {
    background: ${({ $atmosphere }) =>
      $atmosphere === 'sciencelo' ? 'rgba(30, 30, 30, 0.14)' : 'rgba(30, 30, 30, 0.1)'};
  }

  &:focus-visible {
    outline: 2px solid #1e1e1e;
    outline-offset: 2px;
  }
`;

const IntroCopy = styled.div`
  width: 100%;
  max-width: 42rem;
  margin: 0 auto;
  padding-inline: 48px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin: 0;
  color: #1e1e1e;
  animation: ${introReveal} 1100ms cubic-bezier(0.175, 0.32, 0.12, 0.95) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Subtitle = styled.p<{ $atmosphere: ShowcaseAtmosphere }>`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.55;
  margin: 20px auto 0;
  text-wrap: pretty;
  color: ${({ $atmosphere }) => {
    if ($atmosphere === 'candle') return '#6a5a4e';
    if ($atmosphere === 'sciencelo') return '#2a3d38';
    return '#4a4a4a';
  }};
  animation: ${introReveal} 1100ms cubic-bezier(0.175, 0.32, 0.12, 0.95) 180ms both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Stack = styled.section<{ $atmosphere: ShowcaseAtmosphere }>`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  line-height: 0;

  ${({ $atmosphere }) =>
    $atmosphere === 'candle' &&
    css`
      box-shadow: 0 20px 60px rgba(120, 70, 30, 0.08);
    `}
`;

export const ProjectShowcasePage = ({
  title,
  subtitle,
  images,
  galleryLabel,
  atmosphere = 'default',
}: ProjectShowcasePageProps) => {
  // Index into `images` that is currently allowed to start loading.
  // Advances only after the previous module finishes (or errors).
  const [loadUpTo, setLoadUpTo] = useState(0);

  const onModuleLoaded = useCallback((index: number) => {
    setLoadUpTo((current) => Math.max(current, index + 1));
  }, []);

  const projectName = title.replace(/\.$/, '');

  return (
    <Page $atmosphere={atmosphere}>
      {atmosphere === 'candle' && (
        <Atmosphere aria-hidden={true}>
          <Glow $variant={'main'} />
          <Glow $variant={'side'} />
          <Glow $variant={'ember'} />
        </Atmosphere>
      )}

      <Content>
        <Intro $atmosphere={atmosphere}>
          <TitleRow>
            <BackButton href={'/projects'} $atmosphere={atmosphere} aria-label={'Back to projects'}>
              <ArrowLeft size={20} strokeWidth={1.75} aria-hidden={true} />
            </BackButton>
            <IntroCopy>
              <Title>{projectName}</Title>
            </IntroCopy>
          </TitleRow>
          <IntroCopy>
            <Subtitle $atmosphere={atmosphere}>{subtitle}</Subtitle>
          </IntroCopy>
        </Intro>

        <Stack $atmosphere={atmosphere} aria-label={galleryLabel}>
          {images.map((image, index) => (
            <ShowcaseModule
              key={image.index}
              image={image}
              alt={`${projectName} project module ${image.index}`}
              atmosphere={atmosphere}
              canLoad={index <= loadUpTo}
              onLoaded={() => onModuleLoaded(index)}
            />
          ))}
        </Stack>

        <BottomContactSection />
      </Content>
    </Page>
  );
};
