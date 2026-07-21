import React from 'react'

import { HomePage } from 'components/pages/HomePage'
import { getPageJsonLdSchemas } from 'lib/jsonLd'
import { getPageMetadata, serializeJsonLd } from 'lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getPageMetadata('home')

export default function Index() {
  const schemas = getPageJsonLdSchemas('home')

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema['@type']}
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      <HomePage />
    </>
  )
}
