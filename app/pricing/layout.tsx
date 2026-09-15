import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const BASE_URL = 'https://www.dxbrunnerscargo.com'

export const metadata: Metadata = {
  title: 'Express Air Freight Pricing | DXB Runners Cargo',
  description:
    'View DXB Runners Cargo express air freight product pricing in USD and AED. Rates for cargo, electronics, fashion, and specialty items from Dubai to Zimbabwe.',
  alternates: {
    canonical: `${BASE_URL}/pricing`,
  },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/pricing`,
    title: 'Express Air Freight Pricing | DXB Runners Cargo',
    description:
      'View DXB Runners Cargo express air freight product pricing in USD and AED. Rates for cargo, electronics, fashion, and specialty items from Dubai to Zimbabwe.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Express Air Freight Pricing | DXB Runners Cargo',
    description:
      'View DXB Runners Cargo express air freight product pricing in USD and AED. Rates for cargo, electronics, fashion, and specialty items from Dubai to Zimbabwe.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children
}
