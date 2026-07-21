import React from 'react'

import { ProjectsPage } from 'components/pages/ProjectsPage'
import { getPageJsonLdSchemas } from 'lib/jsonLd'
import { getPageMetadata, serializeJsonLd } from 'lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getPageMetadata('projects')

export default function Projects() {
  const schemas = getPageJsonLdSchemas('projects')

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema['@type']}
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      <ProjectsPage />
    </>
  )
}
