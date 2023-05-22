import React from 'react';

import { SocialProfileJsonLd, WebPageJsonLd } from 'next-seo';
import { DefaultSeoProps } from 'next-seo/lib/types';

interface LDJSONConfigItem {
    component: React.ComponentType<any>;
    props: Record<string, any>;
}

interface PageSeoConfig {
    jsonLd?: LDJSONConfigItem[];
    meta?: DefaultSeoProps;
}

interface PagesSeoConfig {
    [page: string]: PageSeoConfig;
}

interface SeoConfig {
    common: PageSeoConfig;
    pages: PagesSeoConfig;
}

const seoConfig = {
    common: {
        titleTemplate: '%s - Emilia Markiewicz - UI & UX Portfolio',
        defaultTitle: 'Emilia Markiewicz - UI & UX Portfolio',
        language: 'en',
        type: 'website'
    },
    pages: {
        'home': {
            meta: {
                title: '',
                canonical: 'https://emcia.design',
                description: `I'm Emilia Markiewicz, a UI/UX designer specializing in creating beautiful and
         functional user interfaces. Check out my portfolio to see my work.`,
                openGraph: {
                    type: 'website',
                    url: 'https://emcia.design',
                    title: 'Emilia Markiewicz',
                    description: `I'm Emilia Markiewicz, a UI/UX designer specializing in creating 
                    beautiful and functional user interfaces. Check out my portfolio to see my work.`,
                    language: { hrefLang: 'en-US', text: 'English' },
                    images: [
                        {
                            url: 'https://emcia.design/images/seo/og-image.png',
                        },
                    ]
                }
            },
            jsonLd: [
                {
                    component: SocialProfileJsonLd,
                    props: {
                        type: 'Person',
                        name: 'Emilia Markiewicz',
                        url: 'https://emcia.design',
                        sameAs: [
                            'https://www.behance.net/emiliamarkiewicz',
                            'https://dribbble.com/emiliamarkiewicz',
                            'https://www.linkedin.com/in/emiliamarkiewicz',
                        ],
                    },
                },
                {
                    component: WebPageJsonLd,
                    props: {
                        id: 'https://emcia.design',
                        name: 'Emilia Markiewicz - UI/UX Designer Portfolio',
                        description: `I'm Emilia Markiewicz, a UI/UX designer specializing
                        in creating beautiful and functional user interfaces. Check out
                        my portfolio to see my work.`,
                        url: 'https://emcia.design',
                        author: {
                            '@type': 'Person',
                            name: 'Emilia Markiewicz',
                        },
                    },
                },
            ]
        },
        'projects': {
            meta: {
                title: 'Projects',
                canonical: 'https://emcia.design/projects',
                description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                openGraph: {
                    url: 'https://emcia.design/projects',
                    title: 'Projects | Emilia Markiewicz',
                    description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                    images: [
                        {
                            url: 'https://emcia.design/images/seo/og-image.png',
                        },
                    ]
                },
            },
            jsonLd: [
                {
                    component: WebPageJsonLd,
                    props: {
                        id: 'https://emcia.design/projects',
                        name: 'Projects - Emilia Markiewicz',
                        description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                        url: 'https://emcia.design/projects',
                        author: {
                            '@type': 'Person',
                            name: 'Emilia Markiewicz',
                        },
                    },
                },
            ]
        },
        'resume': {
            meta: {
                title: 'Resume',
                description: 'Learn more about my professional experience and educational background.',
                canonical: 'https://emcia.design/resume',
                openGraph: {
                    url: 'https://emcia.design/resume',
                    title: 'Resume | Emilia Markiewicz',
                    description: 'Professional resume of Emilia Markiewicz',
                    images: [
                        {
                            url: 'https://emcia.design/images/seo/og-image.png',
                        }
                    ]
                },
            },
        },
        'contact': {
            meta: {
                title: 'Contact',
                canonical: 'https://emcia.design/contact',
                description: `Designing a better user experience. Get in touch if you're
                 looking for a UI/UX designer to join your team.`,
                openGraph: {
                    url: 'https://emcia.design/contact',
                    title: 'Contact | Emilia Markiewicz',
                    description: 'Contact Emilia Markiewicz',
                    images: [
                        {
                            url: 'https://emcia.design/images/seo/og-image.png',
                        }
                    ]
                },
            },
        }
    }
} as SeoConfig;

export { seoConfig };