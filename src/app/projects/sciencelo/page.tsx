import React from 'react'

import { ScienceloProjectPage } from 'components/pages/ScienceloProjectPage'
import { pageMetadata, serializeJsonLd, SITE_NAME, SITE_URL } from 'lib/seo'
import type { Metadata } from 'next'

const PATH = '/projects/sciencelo'
const TITLE = 'Sciencelo — Landing Page UI Design'
const DESCRIPTION =
  'UI case study for Sciencelo, an educational networking platform landing page designed by Emilia Markiewicz.'

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

export default function ScienceloProject() {
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
      <ScienceloProjectPage />
    </>
  )
}
