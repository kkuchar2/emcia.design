import { Behance } from 'components/svg/Behance';
import { Dribbble } from 'components/svg/Dribbble';
import { LinkedIn } from 'components/svg/LinkedIn';

import { transformStyles } from './configUtils';
import { IPortfolioConfig, Project } from './portfolioConfig.types';

const projects = [
    {
        title: 'serenity.',
        image: '/images/projects/serenity_square.png',
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
        image: '/images/projects/sciencelo_no_text.png',
        overlayImage: '/images/projects/sciencelo_text_image.png',
        link: 'https://www.behance.net/gallery/170657341/Sciencelo-Landing-Page-UI-Design',
        linkTitle: 'Behance - Scencelo - Educational Platform Landing Page',
        tags: ['UI/UX', 'Case Study', 'Design System', 'Education', 'Landing Page', 'Sciencelo'],
        alt: 'Sciencelo Landing Page',
        extraImageText: 'Sciencelo.',
        shortDescription: 'EDUCATIONAL PLATFORM LANDING PAGE',
        longDescription: 'This UI case study highlights the design of Sciencelo\'s educational networking platform landing page. The platform effectively matches educational content to users, ensuring a personalized learning process.',
        style: {
            background: '#71A495',
            targetZoom: 1.1,
            objectFit: 'contain',
        }
    },
    {
        title: 'aprojekt.',
        image: '/images/projects/aprojekt_square.png',
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
        dribbbleShotsConfig: {
            title: 'Dribbble shots.',
            secondaryTitle: 'Here you can find my Dribbble shots.',
            shots: [
                {
                    name: 'Sciencelo. - User Dashboard',
                    video: 'videos/sciencelo_user_dashboard.mp4',
                    link: 'https://dribbble.com/shots/21505890-Sciencelo-User-Dashboard',
                },
                {
                    name: 'Lingo - Flashcard Learning App #1',
                    video: 'videos/resized_lingo_flashcard_1.mp4',
                    link: 'https://dribbble.com/shots/21498815-Lingo-Flashcard-Learning-App-1',
                },
                {
                    name: 'Lingo - Flashcard Learning App #2',
                    video: 'videos/resized_lingo_flashcard_2.mp4',
                    link: 'https://dribbble.com/shots/21498901-Lingo-Flashcard-Learning-App-2',
                },
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
        dribbble: {
            link: {
                href: 'https://dribbble.com/emiliamarkiewicz',
                target: '_blank',
                title: 'dribbble.com/emiliamarkiewicz'
            },
            icon: {
                component: Dribbble,
                width: 25,
                height: 25,
                twStyle: 'w-[35px] h-[35px] p-[5px]'
            }
        },
        behance: {
            link: {
                href: 'https://www.behance.net/emiliamarkiewicz',
                target: '_blank',
                title: 'behance.net/emiliamarkiewicz'
            },
            icon: {
                component: Behance,
                width: 25,
                height: 25,
                twStyle: 'w-[35px] h-[35px] p-[5px]'
            }
        },
        linkedin: {
            link: {
                href: 'https://www.linkedin.com/in/emiliamarkiewicz',
                target: '_blank',
                title: 'linkedin.com/in/emiliamarkiewicz'
            },
            icon: {
                component: LinkedIn,
                width: 35,
                height: 35,
                twStyle: 'w-[35px] h-[35px]'
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