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
    alternates?: {
        canonical: string;
    }
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
const environment = process.env.ENVIRONMENT as string || 'development';

let siteUrlValid: boolean;
let siteUrl: URL;
try {
    siteUrl = new URL(SITE_URL);
    siteUrlValid = true;
}
catch (e) {
    console.error('Invalid SITE_URL: ' + SITE_URL, " Page metadata won't be generated. Please set a valid SITE_URL environment variable.");
    siteUrlValid = false;
}

const commonMetadata = {
    title: HOME_TITLE,
    metadataBase: siteUrlValid ? siteUrl : null,
    alternates: {
        canonical: '/'
    },
    robots: {
        index: environment === 'production',
        follow: environment === 'production',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        minimumScale: 1,
        maximumScale: 5,
    },
    manifest: '/manifest.json'
};

const pageMetadata = siteUrlValid ? {
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
            alternates: {
                canonical: SITE_URL + '/projects'
            },
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
            alternates: {
                canonical: SITE_URL + '/resume'
            },
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
            alternates: {
                canonical: SITE_URL + '/contact'
            },
            description: "Designing a better user experience. Get in touch if you're looking for a UI/UX designer to join your team.",
            ogImages: [
                {
                    url: SITE_URL + '/images/seo/og-image.png'
                }
            ]
        })
    }
} : {};

const seoConfig = siteUrlValid ? {
    common: commonMetadata,
    pages: pageMetadata
} : {} as SeoConfig;

const getPageMetadata = (page: string): Metadata => {
    const pageSeoConfig = seoConfig.pages[page];
    return pageSeoConfig ? pageSeoConfig.meta : {} as Metadata;
};

export { seoConfig, getPageMetadata };