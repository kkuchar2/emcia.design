import React, { useEffect } from 'react';

import { ProjectGraphic } from 'components/ProjectItem/ProjectGraphic';
import { TextButtonWithArrow } from 'components/ProjectItem/TextButtonWithArrow';
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
    }
}

const StyledProjectLongDescription = styled.div`
  font-size: 15px;
  color: #595959;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

export const StyledProjectItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
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

const buildThresholdList = () => {
    let thresholds = [];
    for (let i = 0; i <= 1.0; i += 0.01) {
        thresholds.push(i);
    }
    return thresholds;
};

interface ProjectItemProps {
    project: Project;
    isEven?: boolean;
}

export const ProjectItem = (props: ProjectItemProps) => {

    const { project, isEven } = props;

    const { title, image, logo, link, tags, shortDescription, longDescription, style } = project;

    const { longDescriptionMaxWidth } = style || {};

    const ref = React.useRef<HTMLDivElement>(null);

    const [visible, setVisible] = React.useState(false);
    const [enteredFirstTime, setEnteredFirstTime] = React.useState(false);
    const [intersectionRatio, setIntersectionRatio] = React.useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                ref.current?.style.setProperty('--intersection-ratio', entry.intersectionRatio.toString());
                setVisible(entry.intersectionRatio > 0.3);
                setIntersectionRatio(entry.intersectionRatio);

                // set var(--ratio) to entry.intersectionRatio as percentage
                ref.current?.style.setProperty('--ratio', `${entry.intersectionRatio}`);

            },
            {
                root: null,
                rootMargin: '0px',
                threshold: buildThresholdList()
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    useEffect(() => {
        if (!enteredFirstTime && visible) {
            setEnteredFirstTime(true);
        }
    }, [visible, enteredFirstTime]);

    console.log('Intersection ratio: ', intersectionRatio);

    return <StyledProjectItem ref={ref}>
        <ProjectGraphic backgroundImagePath={image} logoImagePath={logo} isVisible={visible} enteredFirstTime={enteredFirstTime} isEven={isEven}/>

        <StyledProjectDescription>
            <StyledWrapper>
                <WithTransformAnimate enteredFirstTime={enteredFirstTime}>
                    <div className={'flex flex-col items-start gap-3 md:gap-5'}>
                        <div className={'text-5xl font-bold text-[#3a3a3a] md:leading-[0.7] lg:text-6xl'}>{title}</div>
                        <div className={'text-md font-medium tracking-wider text-[#3a3a3a] '}>{shortDescription}</div>
                    </div>
                </WithTransformAnimate>
            </StyledWrapper>
            <StyledWrapper>
                <WithTransformAnimate enteredFirstTime={enteredFirstTime} delay={0.3}>
                    <StyledProjectLongDescription style={{ maxWidth: `${longDescriptionMaxWidth}px` || 'auto' }}>
                        {longDescription}
                    </StyledProjectLongDescription>
                </WithTransformAnimate>
            </StyledWrapper>

            <TextButtonWithArrow text={'more details'}
                                 textColor={'#595959'}
                                 circleColor={'#dedede'}
                                 image={'images/arrow_large.svg'}
                                 animate={enteredFirstTime}
                                 intersectionRatio={intersectionRatio}
                                 useAnimation={true}
                                 delay={0}
                                 width={200}/>
        </StyledProjectDescription>
    </StyledProjectItem>;
};
