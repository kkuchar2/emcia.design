import React from 'react';

import { ProjectItem, StyledImageWrapper, StyledProjectItem } from 'components/ProjectItem/ProjectItem';
import styled from 'styled-components';

import { projectConfig } from '../../projectConfig';

const StyledSelectedProjects = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
  padding-left: 40px;
  padding-right: 40px;

  @media (min-width: 768px) {
    margin-top: 160px;
    max-width: 1500px;
    justify-content: center;
    gap: 160px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const StyledProjectItems = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 160px;

  @media (min-width: 768px) {
    ${StyledProjectItem} {
      flex-direction: row;
    }

    & > ${StyledProjectItem}:nth-child(even) {
      flex-direction: row-reverse;

      ${StyledImageWrapper} {
        margin-left: 40px;
        padding-right: 0;
      }
    }

    & > ${StyledProjectItem}:nth-child(odd) {
      flex-direction: row;

      ${StyledImageWrapper} {
        padding-left: 0;
        margin-right: 40px;
      }
    }
  }
`;

const SelectedProjectsTitle = styled.div`
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.5;
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

        const { projectsPageConfig } = projectConfig;

        const { selectedProjectsTitle, selectedProjectsDescription, projects } = projectsPageConfig;

        return <StyledSelectedProjects>
            <div className={'flex w-full flex-col justify-center'}>
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
    }
;
