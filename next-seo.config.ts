import { socialProfileJsonLd, webPageJsonLd } from 'components/SEO/JsonLd';
import { Metadata } from 'next';

export interface JsonLd {
    __html: string;
}

interface PageSeoConfig {
    jsonLd?: JsonLd[];
    meta?: Metadata;
}

interface PagesSeoConfig {
    [page: string]: PageSeoConfig;
}

interface SeoConfig {
    common: Metadata;
    pages: PagesSeoConfig;
}

interface OgImage {
    url: string;
    width?: number;
    height?: number;
}

interface TwitterImage {
    url: string;
}

interface CustomMeta {
    title: string;
    description: string;
    url: string
    ogImages?: OgImage[];
    tiwtterImages?: TwitterImage[];
    locale?: string;
    pageType?: string;
}

const metadataOf = (meta: CustomMeta): Metadata => {
    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            url: meta.url,
            siteName: meta.title,
            title: meta.title,
            description: meta.description,
            images: meta.ogImages,
            locale: meta.locale || 'en_US',
            type: meta['type'] || 'website',
        },
        // twitter: {
        //     card: 'summary_large_image',
        //     title: meta.title,
        //     description: meta.description,
        //     images: meta.tiwtterImages,
        // }
    };
};

const SITE_URL = process.env.SITE_URL as string;
const HOME_TITLE = 'Emilia Markiewicz - UI & UX Portfolio';

const seoConfig = {
    common: {
        title: HOME_TITLE,
        metadataBase: new URL(SITE_URL),
        alternates: {
            canonical: '/'
        },
        robots: {
            index: process.env.NODE_ENV === 'production',
            follow: process.env.NODE_ENV === 'production',
        },
        viewport: {
            width: 'device-width',
            initialScale: 1,
            minimumScale: 1,
            maximumScale: 5,
        },
        manifest: '/manifest.json'
    },
    pages: {
        'home': {
            meta: metadataOf({
                url: SITE_URL,
                title: HOME_TITLE,
                description: "I'm Emilia Markiewicz, a UI/UX designer specializing in creating beautiful and functional user interfaces. Check out my portfolio to see my work.",
                ogImages: [
                    {
                        url: SITE_URL + '/images/seo/og-image.png'
                    }
                ]
            }),
            jsonLd: [
                socialProfileJsonLd({
                    name: 'Emilia Markiewicz',
                    url: SITE_URL,
                    linkedinProfile: 'emiliamarkiewicz',
                    dribbbleProfile: 'emiliamarkiewicz',
                    behanceProfile: 'emiliamarkiewicz'
                }),
                webPageJsonLd({
                    name: HOME_TITLE,
                    description: `I'm Emilia Markiewicz, a UI/UX designer specializing in creating
                    beautiful and functional user interfaces. Check out my portfolio to see my work.`,
                    url: SITE_URL,
                    authorName: 'Emilia Markiewicz',
                })
            ]
        },
        'projects': {
            meta: metadataOf({
                url: SITE_URL + '/projects',
                title: 'Projects - ' + HOME_TITLE,
                description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                ogImages: [
                    {
                        url: SITE_URL + '/images/seo/og-image.png'
                    }
                ]
            }),
            jsonLd: [
                webPageJsonLd({
                    name: 'Projects - ' + HOME_TITLE,
                    description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                    url: SITE_URL + '/projects',
                    authorName: 'Emilia Markiewicz',
                })
            ]
        },
        'resume': {
            meta: metadataOf({
                url: SITE_URL + '/resume',
                title: 'Resume - ' + HOME_TITLE,
                description: 'Learn more about my professional experience and educational background.',
                ogImages: [
                    {
                        url: SITE_URL + '/images/seo/og-image.png'
                    }
                ]
            }),
        },
        'contact': {
            meta: metadataOf({
                url: SITE_URL + '/contact',
                title: SITE_URL + '/contact',
                description: "Designing a better user experience. Get in touch if you're looking for a UI/UX designer to join your team.",
                ogImages: [
                    {
                        url: SITE_URL + '/images/seo/og-image.png'
                    }
                ]
            })
        }
    }
} as SeoConfig;

export { seoConfig };