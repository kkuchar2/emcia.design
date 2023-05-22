import { transformStyles } from './configUtils';
import { IPortfolioConfig, Project } from './portfolioConfig.types';

const projects = [
    {
        title: 'serenity.',
        image: 'projects/serenity_square.png',
        link: 'https://www.behance.net/gallery/156628655/Serenity-Candlemaker-Mobile-App',
        linkTitle: 'Behance - Serenity Candlemaker Mobile App',
        tags: ['UI/UX', 'Mobile', 'App', 'Case Study', 'Design System', 'Candles'],
        alt: 'Serenity Candlemaker Mobile App',
        shortDescription: 'CANDLEMAKER STORE MOBILE APP',
        longDescription: 'A mobile app designed to connect craftspeople and customers who appreciate high quality and unique products.',
        style: {
            background: '#EBE8E4',
            targetZoom: 1.2,
            objectFit: 'contain',
        }
    },
    {
        title: 'sciencelo.',
        image: 'projects/sciencelo_no_text.png',
        overlayImage: 'projects/sciencelo_text_image.png',
        link: 'https://www.behance.net/gallery/170657341/Sciencelo-Landing-Page-UI-Design',
        linkTitle: 'Behance - Scencelo - Educational Platform Landing Page',
        tags: ['UI/UX', 'Case Study', 'Design System', 'Education', 'Landing Page', 'Sciencelo'],
        alt: 'Sciencelo Landing Page',
        extraImageText: 'Sciencelo.',
        shortDescription: 'EDUCATIONAL PLATFORM LANDING PAGE',
        longDescription: 'This UI case study highlights the design of Sciencelo\'s educational networking platform landing page. The platform effectively matches educational content to users, ensuring a personalized learning process. I created this project with the assistance of artificial intelligence tools, specifically ChatGPT-3 and Midjourney AI.',
        style: {
            background: '#71A495',
            targetZoom: 1.1,
            objectFit: 'contain',
        }
    },
    {
        title: 'aprojekt.',
        image: 'projects/aprojekt_square.png',
        link: 'https://www.behance.net/gallery/164216181/Aprojekt-Website-UI-Redesign',
        linkTitle: 'Behance - Aprojekt Website UI redesign',
        tags: ['UI/UX', 'Web', 'Website', 'Case Study', 'Design System', 'Telecommunications'],
        alt: 'AProjekt Website Redesign',
        shortDescription: 'FIBER CABLES COMPANY',
        longDescription: 'This case study focuses on the website redesign for a small telecommunication project office in Warsaw, with a focus on responsive web design to enhance user experience across devices.',
        style: {
            background: 'transparent',
            targetZoom: 1,
            objectFit: 'cover',
        }
    }
] as Project[];

let selectedProjects = transformStyles(projects, {
    'serenity.': {
        longDescriptionMaxWidth: 400
    },
});

const showcasedProjects = transformStyles(projects, {});

export const portfolioConfig: IPortfolioConfig = {
    homePageConfig: {
        selectedProjectsConfig: {
            title: 'selected projects.',
            secondaryTitle: 'Here I present you my best works selected with passion',
            projects: selectedProjects
        }
    },
    projectsPageConfig: {
        showcaseProjectsConfig: {
            title: 'My works.',
            secondaryTitle: 'Below, I want to present to you all my works.',
            projects: showcasedProjects
        },
        dribbleShotsConfig: {
            title: 'Dribble shots.',
            secondaryTitle: 'Here you can find my Dribble shots.',
            shots: [
                {
                    name: 'Sign up page | Daily UI Challenge 001',
                    image: 'projects/shots/daily_ui_challenge_001.png',
                    link: 'https://dribbble.com/shots/19032056-Sign-up-page-Daily-UI-Challenge-001'
                },
                {
                    name: 'Credit Card Checkout | Daily UI Challenge 002',
                    image: 'projects/shots/daily_ui_challenge_002.png',
                    link: 'https://dribbble.com/shots/19041008-Credit-Card-Checkout-Daily-UI-Challenge-002'
                },
                {
                    name: 'Landing page | Daily UI Challenge 003',
                    image: 'projects/shots/daily_ui_challenge_003.png',
                    link: 'https://dribbble.com/shots/19530852-Landing-page-Daily-UI-Challenge-003',
                }
            ]
        }
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
    },
    socialConfig: {
        dribble: {
            link: {
                href: 'https://dribbble.com/emiliamarkiewicz',
                target: '_blank',
                title: 'Emilia Markiewicz - Dribble'
            },
            icon: {
                src: 'images/icons/dribble.svg',
                alt: 'Dribble',
                scale: 0.8,
            }
        },
        behance: {
            link: {
                href: 'https://www.behance.net/emiliamarkiewicz',
                target: '_blank',
                title: 'Emilia Markiewicz - Behance'
            },
            icon: {
                src: 'images/icons/behance.svg',
                alt: 'Behance',
                scale: 0.75
            }
        },
        linkedin: {
            link: {
                href: 'https://www.linkedin.com/in/emiliamarkiewicz',
                target: '_blank',
                title: 'Emilia Markiewicz - LinkedIn'
            },
            icon: {
                src: 'images/icons/linkedin.svg',
                alt: 'LinkedIn',
                scale: 1
            }
        }
    },
    experience: [
        {
            startDate: '10/2020',
            endDate: '06/2022',
            title: 'Designer',
            company: 'Aprojekt Technologie Sp. z o.o. Sp.k.',
            duties: [
                'preparing teletechnical networks construction projects',
                'project coordination with public institutions, constructors and private individuals',
                'preparing and coordinating projects with clients',
                'supporting project budgets analysis',
            ]
        },
        {
            startDate: '07/2019',
            endDate: '10/2020',
            title: 'Junior Designer',
            company: 'Aprojekt Technologie Sp. z o.o. Sp.k.',
            duties: [
                'preparing teletechnical networks construction projects',
                'project coordination with public institutions, constructors and private individuals',
                'preparing lease telecommunication drains and poles projects  '
            ]
        },
        {
            startDate: '03/2019',
            endDate: '06/2019',
            title: 'Intern',
            company: 'IRIS Telecommunication Poland Sp. z o.o.',
            duties: [
                'preparing installation ERTM/GSM-R devices projects for PKP railway lines',
                'office work'
            ]
        }
    ],
    education: [
        {
            startDate: '02/2017',
            endDate: '09/2018',
            title: 'Spatial Planning, Master of Engineering',
            school: 'Warsaw University of Technology'
        },
        {
            startDate: '10/2013',
            endDate: '02/2017',
            title: 'Spatial Planning, Bachelor of Engineering',
            school: 'Warsaw University of Technology'
        }
    ],
    certifications: [
        {
            title: 'Google UX Design Professional Certificate',
            name: 'UX Design course on platform coursera.org',
            date: '2022'
        },
        {
            title: 'Digital Designer Certificate',
            name: 'Web and UI Design course featured by designpractice.pl',
            date: '2022'
        },
        {
            title: 'ECDL CAD Module S8 Certificate',
            name: 'Computer aided design 2D',
            date: '2016'
        }
    ],
};