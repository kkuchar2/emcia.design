import React from 'react';

import { ContactPage } from 'components/pages/ContactPage';
import { SEO } from 'components/SEO/SEO';
import { Metadata } from 'next';

import { getPageMetadata } from '../../../next-seo.config';

export const metadata: Metadata = { ...getPageMetadata('contact') };

export default function Contact() {

    return <>
        <SEO seoKey={'contact'}/>
        <ContactPage/>
    </>;
}