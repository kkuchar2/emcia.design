import { Project, ProjectStyleTransform } from './portfolioConfig.types';

export const transformStyles = (projects: Project[],
    transform: ProjectStyleTransform): Project[] => {
    return projects.map(project => {
        const newProject = { ...project };
        const transformKey = Object.keys(transform).find(key => project.title.includes(key));
        if (transformKey) {
            newProject.style = {
                ...newProject.style,
                ...transform[transformKey]
            };
        }
        return newProject;
    });
};