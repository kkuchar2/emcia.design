import {socialProfileJsonLd, webPageJsonLd} from 'components/SEO/JsonLd';

export interface JsonLd {
    __html: string;
}

interface PageSeoConfig {
    jsonLd?: JsonLd[];
    meta?: any;
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
                title: 'Home',
                canonical: 'https://emcia.design',
                description: `I'm Emilia Markiewicz, a UI/UX designer specializing in creating beautiful and
         functional user interfaces. Check out my portfolio to see my work.`,
                openGraph: {
                    type: 'website',
                    url: 'https://emcia.design',
                    title: 'Emilia Markiewicz',
                    description: `I'm Emilia Markiewicz, a UI/UX designer specializing in creating 
                    beautiful and functional user interfaces. Check out my portfolio to see my work.`,
                    language: {hrefLang: 'en-US', text: 'English'},
                    images: [
                        {
                            url: 'https://emcia.design/images/seo/og-image.png',
                        },
                    ]
                }
            },
            jsonLd: [
                socialProfileJsonLd({
                    name: 'Emilia Markiewicz',
                    url: 'https://emcia.design',
                    linkedinProfile: 'emiliamarkiewicz',
                    dribbbleProfile: 'emiliamarkiewicz',
                    behanceProfile: 'emiliamarkiewicz'
                }),
                webPageJsonLd({
                    name: 'Emilia Markiewicz - UI/UX Designer Portfolio',
                    description: `I'm Emilia Markiewicz, a UI/UX designer specializing in creating
                    beautiful and functional user interfaces. Check out my portfolio to see my work.`,
                    url: 'https://emcia.design',
                    authorName: 'Emilia Markiewicz',
                })
            ]
        },
        'projects': {
            meta: {
                title: 'Projects',
                canonical: 'https://emcia.design/projects',
                description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                openGraph: {
                    url: 'https://emcia.design/projects',
                    title: 'Projects - Emilia Markiewicz - UI & UX Portfolio',
                    description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                    images: [
                        {
                            url: 'https://emcia.design/images/seo/og-image.png',
                        },
                    ]
                },
            },
            jsonLd: [
                webPageJsonLd({
                    name: 'Projects - Emilia Markiewicz - UI & UX Portfolio',
                    description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                    url: 'https://emcia.design/projects',
                    authorName: 'Emilia Markiewicz',
                })
            ]
        },
        'resume': {
            meta: {
                title: 'Resume',
                description: 'Learn more about my professional experience and educational background.',
                canonical: 'https://emcia.design/resume',
                openGraph: {
                    url: 'https://emcia.design/resume',
                    title: 'Resume - Emilia Markiewicz - UI & UX Portfolio',
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
                    title: 'Contact - Emilia Markiewicz - UI & UX Portfolio',
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

export {seoConfig};