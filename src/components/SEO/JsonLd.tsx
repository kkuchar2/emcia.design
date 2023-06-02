import { JsonLd } from '../../../next-seo.config';

export interface JsonLdProps {
    url: string;
    name: string;
    description: string;
    authorName: string;
}

export interface SocialProfileJsonLdProps {
    name: string;
    url: string;
    facebookProfile?: string;
    twitterProfile?: string;
    instagramProfile?: string;
    linkedinProfile?: string;
    dribbbleProfile?: string;
    behanceProfile?: string;
    githubProfile?: string;
}

export const webPageJsonLd = (props: JsonLdProps): JsonLd => {
    const { url, name, authorName, description } = props;

    // remove newlines from description and too big spaces
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'url': url,
        'name': name,
        'description': description.replace(/\n/g, ' ').replace(/\s\s+/g, ' '),
        'author': {
            '@type': 'Person',
            'name': authorName
        }
    };

    return {
        __html: JSON.stringify(jsonLd)
    };
};

export const socialProfileJsonLd = (params: SocialProfileJsonLdProps): JsonLd => {
    const {
        name, url,
        facebookProfile,
        twitterProfile,
        instagramProfile,
        linkedinProfile,
        dribbbleProfile,
        behanceProfile,
        githubProfile
    } = params;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': name,
        'url': url,
        'sameAs': [
            facebookProfile ? `https://www.facebook.com/${facebookProfile}` : '',
            twitterProfile ? `https://twitter.com/${twitterProfile}` : '',
            instagramProfile ? `https://instagram.com/${instagramProfile}` : '',
            linkedinProfile ? `https://www.linkedin.com/in/${linkedinProfile}` : '',
            dribbbleProfile ? `https://dribbble.com/${dribbbleProfile}` : '',
            behanceProfile ? `https://www.behance.net/${behanceProfile}` : '',
            githubProfile ? `https://github.com/${githubProfile}` : ''
        ]
    };

    return {
        __html: JSON.stringify(jsonLd)
    };
};