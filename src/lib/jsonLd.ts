import {
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  PERSON_EMAIL,
  PERSON_JOB_TITLE,
  SEO_COPY,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_PROFILE_URLS,
  type SeoPageKey,
} from 'lib/seo'

const PAGE_COPY: Record<SeoPageKey, { name: string; description: string; path: string }> = {
  home: {
    name: SITE_TITLE,
    description: SEO_COPY.homeDescription,
    path: '/',
  },
  projects: {
    name: `${SEO_COPY.projectsTitle} | ${SITE_NAME}`,
    description: SEO_COPY.projectsDescription,
    path: '/projects',
  },
  resume: {
    name: `${SEO_COPY.resumeTitle} | ${SITE_NAME}`,
    description: SEO_COPY.resumeDescription,
    path: '/resume',
  },
}

export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    email: PERSON_EMAIL,
    jobTitle: PERSON_JOB_TITLE,
    image: LOGO_URL.startsWith('http') ? LOGO_URL : `${SITE_URL}${LOGO_URL}`,
    ...(SOCIAL_PROFILE_URLS.length > 0 ? { sameAs: SOCIAL_PROFILE_URLS } : {}),
  } as const
}

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SEO_COPY.homeDescription,
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
    },
  } as const
}

export function getWebPageJsonLd(page: SeoPageKey) {
  const copy = PAGE_COPY[page]
  const url = `${SITE_URL}${copy.path === '/' ? '' : copy.path}`

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: copy.name,
    description: copy.description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: DEFAULT_OG_IMAGE.startsWith('http') ? DEFAULT_OG_IMAGE : `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    },
    author: {
      '@type': 'Person',
      name: SITE_NAME,
    },
  } as const
}

/** Home gets Person + WebSite + WebPage; other routes get WebPage only. */
export function getPageJsonLdSchemas(page: SeoPageKey) {
  if (page === 'home') {
    return [getPersonJsonLd(), getWebsiteJsonLd(), getWebPageJsonLd('home')] as const
  }

  return [getWebPageJsonLd(page)] as const
}
