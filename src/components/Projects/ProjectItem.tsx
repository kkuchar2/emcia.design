import React, { useRef } from 'react';

import { ProjectArrowButton } from 'components/ArrowButton/ProjectArrowButton';
import { CompositionImage } from 'components/Image/CompositionImage';
import useIntersectionObserver from 'hooks/use-intersection';
import Link from 'next/link';

import { Project } from '../../portfolioConfig.types';

import styles from './ProjectItem.module.scss';

interface ProjectItemProps {
    project: Project;
}

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

    return <div className={styles.projectItem} ref={ref}>
        <Link className={styles.imageWrapper} href={project.link} target={'_blank'} rel={'noopener noreferrer'}>
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
        </Link>

        <div className={styles.projectDescription}>
            <div className={styles.title}>{title}</div>
            <div className={styles.shortDescription}>{shortDescription}</div>
            <div className={styles.longDescription} style={{ maxWidth: `${longDescriptionMaxWidth}px` || 'auto' }}>
                {longDescription}
            </div>

            <div className={'mt-[40px] flex items-end md:mt-0'}>
                <ProjectArrowButton
                    text={'more details'}
                    href={project.link}
                    title={project.linkTitle}/>
            </div>
        </div>
    </div>;
};
