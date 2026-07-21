import type { MetadataRoute } from 'next'

import { PUBLIC_ROUTE_PATHS, SITE_URL } from 'lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTE_PATHS.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
