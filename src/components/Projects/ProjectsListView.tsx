import React from 'react';

import { ProjectItem, StyledImageWrapper, StyledProjectDescription, StyledProjectItem } from 'components/Projects/ProjectItem';
import styled from 'styled-components';

import { ShowcaseProjectsConfig } from '../../portfolioConfig.types';

const StyledSelectedProjects = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;

  @media (min-width: 768px) {
    margin-top: 160px;
    max-width: 1500px;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
    gap: 160px;
  }
`;

const StyledProjectItems = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 160px;

  @media (min-width: 768px) {
    & > ${StyledProjectItem}:nth-child(even) {
      grid-template-columns:  1.5fr 2fr;

      ${StyledImageWrapper} {
        order: 2;
        margin-left: 0;
        margin-right: 0;
      }

      ${StyledProjectDescription} {
        order: 1;
        min-width: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    & > ${StyledProjectItem}:nth-child(even) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.06em;
  color: #1e1e1e;
`;

const SecondaryTitle = styled.h2`
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  color: #6E6E6E;
  font-weight: 400;
  letter-spacing: -0.02em;
  max-width: 400px;
`;

export const ProjectsListView = (props: ShowcaseProjectsConfig) => {

    const { title, secondaryTitle, projects } = props;

    return <StyledSelectedProjects>
        <div className={'flex flex-col gap-2 self-start px-[40px] md:px-0'}>
            <Title>{title}</Title>
            <SecondaryTitle>{secondaryTitle}</SecondaryTitle>
        </div>
        <StyledProjectItems>
            {projects.map((project, index) => <ProjectItem key={index} project={project}/>)}
        </StyledProjectItems>
    </StyledSelectedProjects>;
};
