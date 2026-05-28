import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Sanjay Madta | AI/ML Engineer & Full Stack Developer',
  description: 'Building AI-powered experiences. Full Stack AI Engineer specializing in LangChain, FastAPI, React, and cutting-edge ML solutions.',
  keywords: ['AI Engineer', 'Full Stack Developer', 'Machine Learning', 'LangChain', 'React', 'FastAPI', 'Python', 'Next.js'],
  authors: [{ name: 'Sanjay Madta' }],
  openGraph: {
    title: 'Sanjay Madta | AI/ML Engineer & Full Stack Developer',
    description: 'Building AI-powered experiences. Full Stack AI Engineer specializing in LangChain, FastAPI, React, and cutting-edge ML solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanjay Madta | AI/ML Engineer & Full Stack Developer',
    description: 'Building AI-powered experiences.',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#050505]">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050505] text-white overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
