import React from 'react';

export interface ProjectStyle {
    longDescriptionMaxWidth?: number;
    background?: string;
    targetZoom?: number;
    objectFit?: 'cover' | 'contain';
}

export interface Project {
    title: string;
    image: string;
    overlayImage?: string;
    logo?: string;
    link: string;
    linkTitle?: string;
    tags: string[];
    alt: string;
    shortDescription: string;
    longDescription?: string;
    longDescriptionMaxWidth?: number;
    style?: ProjectStyle;
}

export interface DribbbleShot {
    name: string;
    image?: string;
    video?: string;
    link: string;
}

export interface INavBarItem {
    title: string,
    link?: string
}

export interface INavbarConfig {
    items: INavBarItem[]
}

export interface ShowcaseProjectsConfig {
    title?: string;
    secondaryTitle?: string;
    projects: Project[];
}

export interface DribbbleShotsConfig {
    title?: string;
    secondaryTitle?: string;
    shots: DribbbleShot[];
}

export interface IHomePageConfig {
    selectedProjectsConfig: ShowcaseProjectsConfig,
}

export interface IProjectsPageConfig {
    showcaseProjectsConfig: ShowcaseProjectsConfig,
    dribbbleShotsConfig: DribbbleShotsConfig
}

export interface ISocialLink {
    href: string,
    target: string,
    title: string
}

export interface ISocialIcon {
    component?: React.FC<any>
    width?: number,
    height?: number
    twStyle?: string
}

export interface ISocialItem {
    link: ISocialLink,
    icon: ISocialIcon
}

interface ISocialConfig {
    dribbble: ISocialItem,
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

export interface ProjectStyleTransform {
    [key: string]: ProjectStyle;
}

export interface IPortfolioConfig {
    navBarConfig: INavbarConfig,
    homePageConfig: IHomePageConfig,
    projectsPageConfig: IProjectsPageConfig,
    socialConfig: ISocialConfig
    experience: IExperienceItem[],
    education: IEducationItem[],
    certifications: ICertificationItem[]
}
