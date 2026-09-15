import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const BASE_URL = 'https://www.dxbrunnerscargo.com'

export const metadata: Metadata = {
  title: 'Contact DXB Runners Cargo | Get a Free Freight Quote via WhatsApp',
  description:
    'Contact DXB Runners Cargo for freight & cargo quotes. Reach out via WhatsApp and get help shipping from UAE & China to Zimbabwe.',
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/contact`,
    title: 'Contact DXB Runners Cargo | Get a Free Freight Quote via WhatsApp',
    description:
      'Contact DXB Runners Cargo for freight & cargo quotes. Reach out via WhatsApp and get help shipping from UAE & China to Zimbabwe.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact DXB Runners Cargo | Get a Free Freight Quote via WhatsApp',
    description:
      'Contact DXB Runners Cargo for freight & cargo quotes. Reach out via WhatsApp and get help shipping from UAE & China to Zimbabwe.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}

