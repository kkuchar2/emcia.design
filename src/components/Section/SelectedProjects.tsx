import React from 'react';

import { ProjectItem, StyledImage, StyledProjectItem } from 'components/ProjectItem/ProjectItem';
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

      ${StyledImage} {
        padding-left: 40px;
        padding-right: 0;
      }
    }

    & > ${StyledProjectItem}:nth-child(odd) {
      flex-direction: row;

      ${StyledImage} {
        padding-left: 0;
        padding-right: 40px;
      }
    }
  }
`;

export const SelectedProjects = () => {

        const { projectsPageConfig } = projectConfig;

        const { selectedProjectsTitle, selectedProjectsDescription, projects } = projectsPageConfig;

        return <StyledSelectedProjects>
            <div className={'flex w-full flex-col justify-center'}>
                <div className={'text-2xl font-semibold md:text-4xl md:font-bold'}>
                    {selectedProjectsTitle}
                </div>
                <div className={'mt-3 text-xl font-normal text-[#807F7F]'}>
                    {selectedProjectsDescription}
                </div>
            </div>

            <StyledProjectItems>
                {projects.map((project, index) => <ProjectItem key={index} project={project}/>)}
            </StyledProjectItems>
        </StyledSelectedProjects>;
    }
;
