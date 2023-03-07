import { ProjectGraphic } from 'components/ProjectItem/ProjectGraphic';
import { TextButtonWithArrow } from 'components/ProjectItem/TextButtonWithArrow';
import React from 'react';
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

interface ProjectItemProps {
    project: Project;
    idx: number;
}

interface CSSProperties {
    [key: string]: string | number;
}

const StyledProjectLongDescription = styled.div<{ cssProperties: CSSProperties }>`
  max-width: ${props => props.cssProperties['max-width']};
  font-size: 15px;

  color: #595959;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

export const ProjectItem = (props: ProjectItemProps) => {

    const { project, idx } = props;

    const { title, image, logo, link, tags, shortDescription, longDescription, style } = project;

    const { longDescriptionMaxWidth } = style || {};

    return <div className={'relative flex flex-col items-start md:flex-row gap-[20px] lg:gap-[80px] p-0 md:pl-[40px] md:pr-[40px] ' + (idx % 2 !== 0 ? 'md:flex-row-reverse' : '')}>
        <ProjectGraphic backgroundImagePath={image} logoImagePath={logo}/>

        <div className={'flex w-full grow basis-[300px] flex-col p-[20px] sm:p-[40px] md:w-auto md:p-0'}>
            <div className={'flex flex-col flex-wrap gap-[20px] md:flex-row lg:gap-[50px]'}>
                <div className={'flex flex-col items-start gap-6'}>
                    <div className={'text-3xl font-bold text-[#3a3a3a] md:leading-[0.7] lg:text-6xl'}>{title}</div>
                    <div className={'text-md font-medium tracking-wider text-[#3a3a3a] '}>{shortDescription}</div>
                </div>
                <StyledProjectLongDescription cssProperties={{ 'max-width': `${longDescriptionMaxWidth}px` || 'auto' }}>
                    {longDescription}
                </StyledProjectLongDescription>
            </div>

            <TextButtonWithArrow text={'more details'}
                                 textColor={'#595959'}
                                 circleColor={'#dedede'}
                                 image={'images/arrow_large.svg'}
                                 width={200}/>
        </div>
    </div>;
};
