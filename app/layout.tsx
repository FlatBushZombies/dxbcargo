import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dxbrunnerscargo.com'), // ← your actual domain
  title: {
    default: 'DXB Runners Cargo | Reliable Freight & Cargo Services',
    template: '%s | DXB Runners Cargo',
  },
  description: 'Professional freight and cargo services from UAE & China to Zimbabwe. Trusted sourcing, secure handling, and fast delivery. Door-to-door shipping solutions.',
  keywords: ['freight', 'cargo', 'shipping', 'logistics', 'UAE', 'China', 'Zimbabwe', 'international shipping', 'door-to-door delivery'],
  alternates: {
    canonical: 'https://www.dxbrunnerscargo.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'DXB Runners Cargo',
    title: 'DXB Runners Cargo | Reliable Freight & Cargo Services',
    description: 'Professional freight and cargo services from UAE & China to Zimbabwe. Door-to-door shipping solutions.',
    url: 'https://www.dxbrunnerscargo.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1080,
        height: 1080,
        alt: 'DXB Runners Cargo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DXB Runners Cargo | Reliable Freight & Cargo Services',
    description: 'Professional freight and cargo services from UAE & China to Zimbabwe. Door-to-door shipping solutions.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
}

export const viewport = {
  themeColor: '#DC2626',
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DXB Runners Cargo',
  url: 'https://www.dxbrunnerscargo.com',
  description: 'Professional freight and cargo services from UAE & China to Zimbabwe.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.dxbrunnerscargo.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
