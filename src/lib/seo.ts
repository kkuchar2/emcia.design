import type { Metadata } from 'next'

export const SITE_URL = process.env.SITE_URL || 'https://emciadesign.kkucharski.com'
export const SITE_NAME = 'Emilia Markiewicz'
export const SITE_TITLE = 'Emilia Markiewicz - UI & UX Portfolio'
export const DEFAULT_OG_IMAGE = '/images/seo/og-image.png'
export const LOGO_URL = '/images/pwa/icon_x512.png'
export const PERSON_EMAIL = 'emilia.markiewicz@gmail.com'
export const PERSON_JOB_TITLE = 'UI/UX Designer'

export const SOCIAL_PROFILE_URLS = [
  process.env.NEXT_PUBLIC_DRIBBBLE_URL ?? 'https://dribbble.com/emiliamarkiewicz',
  process.env.NEXT_PUBLIC_BEHANCE_URL ?? 'https://www.behance.net/emiliamarkiewicz',
  process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://www.linkedin.com/in/emiliamarkiewicz',
].filter((url): url is string => Boolean(url))

export const SEO_COPY = {
  homeTitle: SITE_TITLE,
  homeDescription:
    "I'm Emilia Markiewicz, a UI/UX designer specializing in creating beautiful and functional user interfaces. Check out my portfolio to see my work.",
  projectsTitle: 'Projects',
  projectsDescription:
    'Discover a collection of UI/UX design projects showcasing my skills and experience.',
  resumeTitle: 'Resume',
  resumeDescription: 'Learn more about my professional experience and educational background.',
} as const

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

/** Paths listed in sitemap (indexable pages). */
export const PUBLIC_ROUTE_PATHS = ['/', '/projects', '/projects/sciencelo', '/projects/serenity', '/projects/aprojekt', '/resume'] as const

const NOINDEX_ROBOTS: Metadata['robots'] = { index: false, follow: false }

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  locale?: string
  noindex?: boolean
  absoluteTitle?: boolean
}

export function pageMetadata({
  title,
  description,
  path,
  locale = 'en_US',
  noindex = false,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const openGraphImages = [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }]

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      locale,
      type: 'website',
      siteName: SITE_NAME,
      images: openGraphImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    ...(noindex ? { robots: NOINDEX_ROBOTS } : {}),
  }
}

export type SeoPageKey = 'home' | 'projects' | 'resume'

const SEO_PAGES: Record<
  SeoPageKey,
  {
    title: string
    description: string
    path: string
    absoluteTitle?: boolean
  }
> = {
  home: {
    title: SEO_COPY.homeTitle,
    description: SEO_COPY.homeDescription,
    path: '/',
    absoluteTitle: true,
  },
  projects: {
    title: SEO_COPY.projectsTitle,
    description: SEO_COPY.projectsDescription,
    path: '/projects',
  },
  resume: {
    title: SEO_COPY.resumeTitle,
    description: SEO_COPY.resumeDescription,
    path: '/resume',
  },
}

export function getPageMetadata(
  page: SeoPageKey,
  options?: { noindex?: boolean; absoluteTitle?: boolean },
): Metadata {
  const config = SEO_PAGES[page]

  return pageMetadata({
    title: config.title,
    description: config.description,
    path: config.path,
    noindex: options?.noindex,
    absoluteTitle: options?.absoluteTitle ?? config.absoluteTitle,
  })
}

export const noindexMetadata = (): Metadata => ({
  robots: NOINDEX_ROBOTS,
})

/** Paths blocked in robots.txt (none for this public portfolio). */
export const ROBOTS_DISALLOW_PATHS = ['/og-preview'] as const

export function buildRobotsDisallowPaths(): string[] {
  return [...ROBOTS_DISALLOW_PATHS]
}
