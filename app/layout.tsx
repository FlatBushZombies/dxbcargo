import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dxbrunnerscargo.com'), // ← your actual domain
  title: {
    default: 'DXB Runners Cargo | Track Your Shipment',
    template: '%s | DXB Runners Cargo',
  },
  description: 'Track your DXB Runners Cargo shipment in real time. Fast, secure freight from UAE & China to Zimbabwe.',
  keywords: ['track shipment', 'shipment tracking', 'freight tracking', 'cargo', 'UAE', 'China', 'Zimbabwe', 'DXB Runners Cargo'],
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
    title: 'DXB Runners Cargo | Track Your Shipment',
    description: 'Track your DXB Runners Cargo shipment in real time. Fast, secure freight from UAE & China to Zimbabwe.',
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
    title: 'DXB Runners Cargo | Track Your Shipment',
    description: 'Track your DXB Runners Cargo shipment in real time. Fast, secure freight from UAE & China to Zimbabwe.',
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
  description: 'Track your DXB Runners Cargo shipment in real time. Fast, secure freight from UAE & China to Zimbabwe.',
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
        {children}
      </body>
    </html>
  )
}
