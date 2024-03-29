import React, { useRef } from 'react';

import { ProjectArrowButton } from 'components/ArrowButton/ProjectArrowButton';
import { CompositionImage } from 'components/Image/AppImage';
import useIntersectionObserver from 'hooks/use-intersection';
import Link from 'next/link';
import styled from 'styled-components';

import { Project } from '../../portfolioConfig.types';

const StyledProjectLongDescription = styled.div`
  font-size: 15px;
  color: #595959;
  font-weight: 400;
  margin-top: 30px;
`;

export const StyledProjectItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  flex-direction: column;
  column-gap: 0;
  row-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1.5fr;
    column-gap: 3%;
    row-gap: 0;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: max(7%, 80px);
  }
`;

export const StyledProjectDescription = styled.div`
  display: grid;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  order: 2;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    grid-template-rows: repeat(3, auto) minmax(0, 1fr);
  }
`;

interface ProjectItemProps {
    project: Project;
}

export const StyledImageWrapper = styled(Link)`
  aspect-ratio: 4/3;
  position: relative;
  overflow: hidden;
  transition: background 2s ease;
  order: 1;
`;

const Title = styled.div`
  font-size: clamp(3rem, 3.5vw, 4rem);
  font-weight: 700;
  color: #1e1e1e;
  line-height: 0.8;
`;

const ShortDescription = styled.div`
  font-size: 15px;
  color: #595959;
  font-weight: 400;
  margin-top: 20px;
`;

export const ProjectItem = (props: ProjectItemProps) => {

    const { project } = props;

    const { title, image, overlayImage, alt, shortDescription, longDescription, style } = project;

    const { background, targetZoom, objectFit } = style || {};

    const { longDescriptionMaxWidth } = style || {};

    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {
        threshold: 0.3,
    });
    const isVisible = !!entry?.isIntersecting;

    return <StyledProjectItem ref={ref}>
        <StyledImageWrapper href={project.link} target={'_blank'} rel={'noopener noreferrer'} prefetch={false}>
            <CompositionImage
                show={isVisible}
                alt={`Open in Behance - ${alt}`}
                background={background}
                images={[
                    {
                        src: image,
                        sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 620px, 800px',
                        style: {
                            objectFit: objectFit || 'cover',
                            transition: 'transform 2s cubic-bezier(0.075, 0.82, 0.165, 1)',
                            transform: isVisible ? `translateY(0) scale(${targetZoom})` : 'translateY(150%) scale(2)'
                        }
                    },
                    {
                        src: overlayImage,
                        sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 620px, 800px',
                        style: {
                            objectFit: objectFit || 'cover',
                            transition: 'transform 2s cubic-bezier(0.075, 0.82, 0.165, 1) 300ms, opacity 2s ease',
                            transform: isVisible ? `translateY(-20px) scale(${1.2})` : 'translateY(150%) scale(2)'
                        }
                    }
                ]}
            />
        </StyledImageWrapper>

        <StyledProjectDescription>
            <Title>{title}</Title>
            <ShortDescription>{shortDescription}</ShortDescription>
            <StyledProjectLongDescription style={{ maxWidth: `${longDescriptionMaxWidth}px` || 'auto' }}>
                {longDescription}
            </StyledProjectLongDescription>

            <div className={'mt-[40px] flex items-end md:mt-0'}>
                <ProjectArrowButton
                    text={'more details'}
                    href={project.link}
                    title={project.linkTitle}/>
            </div>
        </StyledProjectDescription>
    </StyledProjectItem>;
};
