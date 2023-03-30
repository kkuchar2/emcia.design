import React from 'react';

import { ProjectItem, StyledImageWrapper, StyledProjectDescription, StyledProjectItem } from 'components/ProjectItem/ProjectItem';
import styled from 'styled-components';

import { portfolioConfig } from '../../portfolioConfig';

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
      ${StyledImageWrapper} {
        order: 2;
      }

      ${StyledProjectDescription} {
        order: 1;
      }
    }
  }
`;

const SelectedProjectsTitle = styled.div`
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.06em;
  color: #1e1e1e;
`;

const SelectedProjectsDescription = styled.div`
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  color: #807F7F;
  font-weight: 400;
  letter-spacing: -0.02em;
  max-width: 400px;
`;

export const SelectedProjects = () => {

    const { selectedProjectsTitle, selectedProjectsDescription, projects } = portfolioConfig.projectsPageConfig;

    return <StyledSelectedProjects>
        <div className={'flex flex-col gap-2 self-start px-[40px] md:px-0'}>
            <SelectedProjectsTitle>
                {selectedProjectsTitle}
            </SelectedProjectsTitle>
            <SelectedProjectsDescription>
                {selectedProjectsDescription}
            </SelectedProjectsDescription>
        </div>
        <StyledProjectItems>
            {projects.map((project, index) => <ProjectItem key={index} project={project}/>)}
        </StyledProjectItems>
    </StyledSelectedProjects>;
};
