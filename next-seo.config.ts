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
        alternates: meta.alternates,
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

const SITE_URL = process.env.SITE_URL || 'https://emcia.design';
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
                    url: 'images/seo/og-image.png'
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
            url: SITE_URL + 'projects',
            title: 'Projects - ' + HOME_TITLE,
            alternates: {
                canonical: '/projects'
            },
            description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
            ogImages: [
                {
                    url: 'images/seo/og-image.png'
                }
            ]
        }),
        jsonLd: [
            webPageJsonLd({
                name: 'Projects - ' + HOME_TITLE,
                description: 'Discover a collection of UI/UX design projects showcasing my skills and experience',
                url: SITE_URL + 'projects',
                authorName: 'Emilia Markiewicz',
            })
        ]
    },
    'resume': {
        meta: metadataOf({
            url: SITE_URL + 'resume',
            title: 'Resume - ' + HOME_TITLE,
            alternates: {
                canonical: '/resume'
            },
            description: 'Learn more about my professional experience and educational background.',
            ogImages: [
                {
                    url: 'images/seo/og-image.png'
                }
            ]
        }),
    }
} : {};

const seoConfig = siteUrlValid ? {
    common: commonMetadata,
    pages: pageMetadata
} : {
    common: commonMetadata,
    pages: {}
} as SeoConfig;

const getPageMetadata = (page: string): Metadata => {
    const pageSeoConfig = seoConfig.pages?.[page];
    return pageSeoConfig ? pageSeoConfig.meta : {} as Metadata;
};

export { seoConfig, getPageMetadata };