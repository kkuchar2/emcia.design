import React, { useRef } from 'react';

import { ProjectArrowButton } from 'components/ArrowButton/ProjectArrowButton';
import useIntersectionObserver from 'hooks/use-intersection';
import Image from 'next/image';
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

export const StyledImageWrapper = styled.div<{ isVisible?: boolean, background?: string }>`
  aspect-ratio: 4/3;
  position: relative;
  overflow: hidden;
  background: ${({ background, isVisible }) => isVisible ? background : 'transparent'};
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

    const { title, image, alt, shortDescription, longDescription, style } = project;

    const { background, targetZoom, objectFit } = style || {};

    const { longDescriptionMaxWidth } = style || {};

    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    const img = require(`/public/images/${image}`);

    const [loaded, setLoaded] = React.useState(false);

    const onLoadingComplete = () => {
        setLoaded(true);
    };

    return <StyledProjectItem ref={ref}>
        <StyledImageWrapper isVisible={isVisible} background={background}>
            <Image
                src={img}
                loading={'eager'}
                alt={alt}
                title={alt}
                fill={true}
                onLoadingComplete={onLoadingComplete}
                sizes={'(min-width: 1024px) 512px, (min-width: 28em) 45vw, 100vw'}
                quality={100}
                style={{
                    objectFit: objectFit || 'cover',
                    transition: 'transform 2s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 2s ease',
                    transform: isVisible && loaded ? `translateY(0) scale(${targetZoom})` : 'translateY(400px) scale(2)'
                }}/>
        </StyledImageWrapper>

        <StyledProjectDescription>
            <Title>{title}</Title>
            <ShortDescription>{shortDescription}</ShortDescription>
            <StyledProjectLongDescription style={{ maxWidth: `${longDescriptionMaxWidth}px` || 'auto' }}>
                {longDescription}
            </StyledProjectLongDescription>

            <div className={'mt-[40px] flex items-end md:mt-0 '}>
                <ProjectArrowButton text={'more details'} image={'images/arrow_large.svg'} href={project.link} title={project.linkTitle}/>
            </div>
        </StyledProjectDescription>
    </StyledProjectItem>;
};
