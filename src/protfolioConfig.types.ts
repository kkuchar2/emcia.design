import { Project } from 'components/ProjectItem/ProjectItem';

export interface INavBarItem {
    title: string,
    link?: string
}

export interface INavbarConfig {
    items: INavBarItem[]
}

export interface IProjectsPageConfig {
    projects: Project[];
    selectedProjectsTitle?: string;
    selectedProjectsDescription?: string;
}

export interface IProjectConfig {
    projectsPageConfig: IProjectsPageConfig,
    navBarConfig: INavbarConfig
}

export interface ISocialLink {
    href: string,
    target: string,
    title: string
}

export interface ISocialIcon {
    src: string;
    altText: string;
    scale?: number;
}

export interface ISocialItem {
    link: ISocialLink,
    icon: ISocialIcon
}

interface ISocialConfig {
    dribble: ISocialItem,
    behance: ISocialItem,
    linkedin: ISocialItem
}

export interface IExperienceItem {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    duties: string[];
}

export interface IEducationItem {
    startDate: string;
    endDate: string;
    title: string;
    school: string;
}

export interface ICertificationItem {
    title: string;
    name: string;
    date: string;
}

export interface IPortfolioConfig {
    projectsPageConfig: IProjectsPageConfig,
    navBarConfig: INavbarConfig,
    socialConfig: ISocialConfig
    experience: IExperienceItem[],
    education: IEducationItem[],
    certifications: ICertificationItem[]
}
