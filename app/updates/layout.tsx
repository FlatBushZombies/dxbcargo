import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const BASE_URL = 'https://www.dxbrunnerscargo.com'

export const metadata: Metadata = {
  title: 'Freight Updates & Notices | DXB Runners Cargo',
  description:
    'Read the latest freight notices and operational updates from DXB Runners Cargo for shipments from UAE & China to Zimbabwe.',
  alternates: {
    canonical: `${BASE_URL}/updates`,
  },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/updates`,
    title: 'Freight Updates & Notices | DXB Runners Cargo',
    description:
      'Read the latest freight notices and operational updates from DXB Runners Cargo for shipments from UAE & China to Zimbabwe.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freight Updates & Notices | DXB Runners Cargo',
    description:
      'Read the latest freight notices and operational updates from DXB Runners Cargo for shipments from UAE & China to Zimbabwe.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function UpdatesLayout({ children }: { children: ReactNode }) {
  return children
}

