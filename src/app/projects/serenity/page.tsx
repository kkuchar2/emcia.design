import React from 'react'

import { SerenityProjectPage } from 'components/pages/SerenityProjectPage'
import { pageMetadata, serializeJsonLd, SITE_NAME, SITE_URL } from 'lib/seo'
import type { Metadata } from 'next'

const PATH = '/projects/serenity'
const TITLE = 'Serenity — Candlemaker Mobile App'
const DESCRIPTION =
  'UI/UX case study for Serenity, a candlemaker store mobile app designed by Emilia Markiewicz.'

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

export default function SerenityProject() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    author: {
      '@type': 'Person',
      name: SITE_NAME,
    },
  }

  return (
    <>
      <script
        type={'application/ld+json'}
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />
      <SerenityProjectPage />
    </>
  )
}
