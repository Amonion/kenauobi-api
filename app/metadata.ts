// lib/metadata.ts
import type { Metadata, Viewport } from 'next'

interface PageMetadataParams {
  title?: string
  description?: string
  image?: string // e.g., '/og-about.jpg' or full URL
  imageAlt?: string
  url?: string // relative path like '/about' or full URL
  noIndex?: boolean
}

const BASE_URL = 'https://schoolingsocial.com'

const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Schooling Social - Connect, Learn & Excel with Peers',
    template: '%s | Schooling Social',
  },
  description:
    'Schooling Social is the ultimate student hub: practice scholarship exams, connect with peers nationwide, join study groups, track progress, and grow academically and socially.',
  keywords:
    'schooling social, student social network, scholarship exams, study groups, education platform, student community, academic growth, peer learning',
  authors: [{ name: 'Schooling Social Team' }],
  creator: 'Schooling Social',
  publisher: 'Schooling Social',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Schooling Social',
    locale: 'en_US',
    type: 'website',
    url: BASE_URL,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Schooling Social - Student Hub for Learning & Connection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@schoolingsocial',
    images: ['/twitter-image.jpg'],
  },
}

// Separate base viewport (including themeColor)
export const baseViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export function generatePageMetadata({
  title,
  description,
  image,
  imageAlt,
  url,
  noIndex = false,
}: PageMetadataParams = {}): Metadata {
  return {
    ...baseMetadata,
    title: title ? title : baseMetadata.title,
    description: description ?? baseMetadata.description,
    alternates: {
      canonical: url ?? '/',
    },
    robots: noIndex ? { index: false, follow: false } : baseMetadata.robots,
    openGraph: {
      ...baseMetadata.openGraph!,
      title: title ?? baseMetadata.openGraph?.title,
      description: description ?? baseMetadata.openGraph?.description,
      url: url ? new URL(url, BASE_URL).toString() : BASE_URL,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: imageAlt ?? 'Schooling Social',
            },
          ]
        : baseMetadata.openGraph?.images,
    },
    twitter: {
      ...baseMetadata.twitter!,
      title: title ?? baseMetadata.twitter?.title,
      description: description ?? baseMetadata.twitter?.description,
      images: image ? [image] : baseMetadata.twitter?.images,
    },
  }
}
