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

export const projectConfig: IProjectConfig = {
    projectsPageConfig: {
        selectedProjectsTitle: 'selected projects.',
        selectedProjectsDescription: 'Here I present you my best works selected with passion',
        projects: [
            {
                title: 'serenity.',
                image: '/images/serenity_square.png',
                link: 'https://www.behance.net/gallery/116000807/Handmade-App-UIUX-Design',
                tags: ['UI/UX', 'Mobile', 'App'],
                shortDescription: 'CANDLEMAKER STORE MOBILE APP',
                longDescription: 'A mobile app designed to connect craftspeople and customers who appreciate high quality and unique products.',
                style: {
                    longDescriptionMaxWidth: 400,
                    background: '#EBE8E4',
                    targetZoom: 1.2,
                    objectFit: 'contain'
                }
            },
            {
                title: 'aprojekt.',
                image: '/images/aprojekt_square.png',
                link: 'https://www.behance.net/gallery/116000807/Handmade-App-UIUX-Design',
                tags: ['UI/UX', 'Mobile', 'App'],
                shortDescription: 'FIBER CABLES COMPANY',
                longDescription: 'A mobile app designed to connect craftspeople and customers who appreciate high quality and unique products.',
                style: {
                    background: '#f4f4f4',
                    targetZoom: 0.9,
                    objectFit: 'cover'
                }
            },
        ]
    },
    navBarConfig: {
        items: [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'Projects',
                link: '/projects'
            },
            {
                title: 'Resume',
                link: '/resume'
            },
            {
                title: 'Contact',
                link: '/contact'
            }
        ]
    }
};