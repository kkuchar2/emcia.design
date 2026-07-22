import React from 'react'

import { AprojektProjectPage } from 'components/pages/AprojektProjectPage'
import { pageMetadata, serializeJsonLd, SITE_NAME, SITE_URL } from 'lib/seo'
import type { Metadata } from 'next'

const PATH = '/projects/aprojekt'
const TITLE = 'Aprojekt — Website UI Redesign'
const DESCRIPTION =
  'UI case study for Aprojekt, a fiber cables company website redesign by Emilia Markiewicz.'

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

export default function AprojektProject() {
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
      <AprojektProjectPage />
    </>
  )
}
