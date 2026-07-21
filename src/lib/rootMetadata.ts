import type { Metadata } from 'next'

import {
  DEFAULT_OG_IMAGE,
  SEO_COPY,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from 'lib/seo'

const defaultDescription = SEO_COPY.homeDescription
const defaultTitle = SITE_TITLE

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/images/pwa/icon_x256.png', sizes: '256x256', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/images/pwa/icon_x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/images/pwa/icon_x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
}
