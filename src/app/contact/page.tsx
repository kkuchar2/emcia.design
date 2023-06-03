import React from 'react';

import { ContactPage } from 'components/pages/ContactPage';
import { SEO } from 'components/SEO/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Portfolio'
};

export default function Contact() {

    return <>
        <SEO seoKey={'contact'}/>
        <ContactPage/>
    </>;
}