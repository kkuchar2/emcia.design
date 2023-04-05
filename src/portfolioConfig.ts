import { transformStyles } from './configUtils';
import { IPortfolioConfig, Project } from './portfolioConfig.types';

const allProjects = [
    {
        title: 'serenity.',
        image: 'serenity_square.png',
        link: 'https://www.behance.net/gallery/116000807/Handmade-App-UIUX-Design',
        tags: ['UI/UX', 'Mobile', 'App'],
        alt: 'Serenity app',
        shortDescription: 'CANDLEMAKER STORE MOBILE APP',
        longDescription: 'A mobile app designed to connect craftspeople and customers who appreciate high quality and unique products.',
    },
    {
        title: 'aprojekt.',
        image: 'aprojekt_square.png',
        link: 'https://www.behance.net/gallery/116000807/Handmade-App-UIUX-Design',
        tags: ['UI/UX', 'Mobile', 'App'],
        alt: 'Aprojekt app',
        shortDescription: 'FIBER CABLES COMPANY',
        longDescription: 'This case study focuses on the website redesign for a small telecommunication project office in Warsaw, with a focus on responsive web design to enhance user experience across devices.',
    }
] as Project[];

let selectedProjects = transformStyles(allProjects, {
    'serenity.': {
        longDescriptionMaxWidth: 400,
        background: '#EBE8E4',
        targetZoom: 1.2,
        objectFit: 'contain'
    },
    'aprojekt.': {
        background: '#f4f4f4',
        targetZoom: 0.9,
        objectFit: 'cover'
    }
});

const showcasedProjects = transformStyles(allProjects, {
    'serenity.': {
        background: '#EBE8E4',
        targetZoom: 1.2,
        objectFit: 'contain'
    },
    'aprojekt.': {
        background: '#f4f4f4',
        targetZoom: 0.9,
        objectFit: 'cover'
    }
});

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
                    name: 'Landing page | Daily UI Challenge 003',
                    image: 'https://cdn.dribbble.com/users/10819497/screenshots/19530852/media/a89fbef11cc2bb082492939c9f3f337b.png',
                    link: 'https://dribbble.com/shots/19530852-Landing-page-Daily-UI-Challenge-003'
                },
                {
                    name: 'Credit Card Checkout | Daily UI Challenge 002',
                    image: 'https://cdn.dribbble.com/users/10819497/screenshots/19041008/media/a06ca03781ebf5e4ad5617d39cbd177b.png?compress=1&resize=1600x1200&vertical=top',
                    link: 'https://dribbble.com/shots/19041008-Credit-Card-Checkout-Daily-UI-Challenge-002'
                },
                {
                    name: 'Sign up page | Daily UI Challenge 001',
                    image: 'https://cdn.dribbble.com/users/10819497/screenshots/19032056/media/67032c073b19cc5b94e129d9f2877e3a.png?compress=1&resize=1600x1200&vertical=top',
                    link: 'https://dribbble.com/shots/19032056-Sign-up-page-Daily-UI-Challenge-001'
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
                title: 'Dribble'
            },
            icon: {
                src: 'images/dribble.svg',
                alt: 'Dribble',
                scale: 0.8,
            }
        },
        behance: {
            link: {
                href: 'https://www.behance.net/emiliamarkiewicz',
                target: '_blank',
                title: 'Behance'
            },
            icon: {
                src: 'images/behance.svg',
                alt: 'Behance',
                scale: 0.75
            }
        },
        linkedin: {
            link: {
                href: 'https://www.linkedin.com/in/emiliamarkiewicz',
                target: '_blank',
                title: 'LinkedIn'
            },
            icon: {
                src: 'images/linkedin.svg',
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
            title: 'Spatial Planning, Master of Science in Engineering',
            school: 'Warsaw University of Technology'
        },
        {
            startDate: '02/2017',
            endDate: '09/2018',
            title: 'Spatial Planning, Bachelor of Science in Engineering',
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