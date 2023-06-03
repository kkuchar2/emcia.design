import React from 'react';

import { Layout } from 'components/pages/layout';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
    fallback: ['sans-serif'],
});

export const metadata: Metadata = {
    title: 'Emilia Markiewicaaaz',
    description: 'Emilia Markiewicz\'s personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang={'en'}>
        <head>
            <link rel={'manifest'} href={'/manifest.json'}/>
            <link rel={'apple-touch-icon'} href={'/images/pwa/icon_x256.png'}/>
        </head>
        <body>
            <main className={inter.className}>
                <Layout>
                    {children}
                </Layout>
            </main>
        </body>
    </html>;
}