import React from 'react'

import { ResumePage } from 'components/pages/ResumePage'
import { getPageJsonLdSchemas } from 'lib/jsonLd'
import { getPageMetadata, serializeJsonLd } from 'lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getPageMetadata('resume')

export default function Resume() {
  const schemas = getPageJsonLdSchemas('resume')

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema['@type']}
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      <ResumePage />
    </>
  )
}
