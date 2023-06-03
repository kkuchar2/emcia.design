import React from 'react';

import { Layout } from 'components/pages/layout';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import '../styles/globals.css';

import { seoConfig } from '../../next-seo.config';

const inter = Inter({
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
    fallback: ['sans-serif'],
});

export const metadata: Metadata = {
    ...seoConfig.common
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang={'en'}>
        <Head>
            <link rel={'apple-touch-icon'} href={'/images/pwa/icon_x256.png'}/>
        </Head>
        <body>
            <main className={inter.className}>
                <Layout>
                    {children}
                </Layout>
            </main>
        </body>
    </html>;
}