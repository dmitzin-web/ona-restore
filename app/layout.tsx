import Footer from '@/components/Footer'
import EmergencyBanner from '@/components/EmergencyBanner'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import Header from '@/components/Header'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'ONA Restoration | Restoration & Remodeling in Vancouver WA',
    template: '%s | ONA Restoration',
  },

  description:
    'Water damage restoration, reconstruction, remodeling, and emergency property restoration services in Vancouver WA and Portland metro.',

  metadataBase: new URL('https://onarestore.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<body className="min-h-full bg-neutral-950 text-white">
  <LocalBusinessSchema />
  <EmergencyBanner />
  <Header />
  {children}
  <Footer />
        <StickyMobileCTA />
</body>
    </html>
  )
}