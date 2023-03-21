import React, { useRef } from 'react';

import { TextButtonWithArrow } from 'components/ProjectItem/TextButtonWithArrow';
import useIntersectionObserver from 'hooks/use-intersection';
import styled from 'styled-components';

export interface Project {
    title: string;
    image: string;
    logo?: string;
    link: string;
    tags: string[];
    shortDescription: string;
    longDescription?: string;
    longDescriptionMaxWidth?: number;
    style?: {
        longDescriptionMaxWidth?: number;
        background?: string;
        targetZoom?: number;
        objectFit?: 'cover' | 'contain';
    }
}

const StyledProjectLongDescription = styled.div`
  font-size: 15px;
  color: #595959;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const StyledProjectItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 40px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledWrapper = styled.div`
  overflow: hidden;
`;

interface WithTransformAnimateProps {
    delay?: number;
    enteredFirstTime?: boolean;
}

const WithTransformAnimate = styled.div<WithTransformAnimateProps>`
  transform: ${({ enteredFirstTime }) => enteredFirstTime ? 'translateY(0)' : 'translateY(100%)'};
  will-change: transform;
  transition: transform 1.2s cubic-bezier(0.175, 0.67, 0.3, 0.97) ${({ delay }) => delay || 0}s;
  line-height: normal;
  position: relative;
`;

const StyledProjectDescription = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-basis: 300px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
  gap: 20px;
  height: 100%;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    gap: 50px;
  }
`;

interface ProjectItemProps {
    project: Project;
}

interface StyledImageProps {
    isVisible?: boolean;
    background?: string;
    targetZoom?: number;
    objectFit?: string;
}

export const StyledImageWrapper = styled.div<StyledImageProps>`
  aspect-ratio: 4/3;
  position: relative;
  width: 100%;
  padding: 0;
  overflow: hidden;
  background: ${({ background, isVisible }) => isVisible ? background : 'transparent'};
  transition: background 2s ease;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const StyledImage = styled.img<StyledImageProps>`
  transform: ${({ isVisible, targetZoom }) => isVisible ? `translateY(0) scale(${targetZoom})` : 'translateY(400px) scale(2)'};
  transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  width: 100%;
  height: 100%;
`;

export const ProjectItem = (props: ProjectItemProps) => {

    const { project } = props;

    const { title, image, shortDescription, longDescription, style } = project;

    const { background, targetZoom, objectFit } = style || {};

    const { longDescriptionMaxWidth } = style || {};

    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    return <StyledProjectItem ref={ref}>
        <StyledImageWrapper isVisible={isVisible} background={background}>
            <StyledImage src={image} isVisible={isVisible} targetZoom={targetZoom} objectFit={objectFit}/>
        </StyledImageWrapper>

        <StyledProjectDescription>
            <StyledWrapper>
                <WithTransformAnimate enteredFirstTime={isVisible}>
                    <div className={'flex flex-col items-start gap-3 md:gap-5'}>
                        <div className={'text-5xl font-bold text-[#1e1e1e] md:leading-[0.7] lg:text-6xl'}>{title}</div>
                        <div className={'text-md font-medium tracking-wider text-[#3a3a3a] '}>{shortDescription}</div>
                    </div>
                </WithTransformAnimate>
            </StyledWrapper>
            <StyledWrapper>
                <WithTransformAnimate enteredFirstTime={isVisible} delay={0.3}>
                    <StyledProjectLongDescription style={{ maxWidth: `${longDescriptionMaxWidth}px` || 'auto' }}>
                        {longDescription}
                    </StyledProjectLongDescription>
                </WithTransformAnimate>
            </StyledWrapper>

            <TextButtonWithArrow text={'more details'}
                                 textColor={'#595959'}
                                 circleColor={'#dedede'}
                                 hoverBgColor={'#f1f1f1'}
                                 hoverBorderColor={'#dedede'}
                                 image={'images/arrow_large.svg'}
                                 delay={0}
                                 width={200}/>
        </StyledProjectDescription>
    </StyledProjectItem>;
};
