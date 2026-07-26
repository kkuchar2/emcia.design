import React from 'react'

import { DeployRecover } from 'components/DeployRecover/DeployRecover'
import { BuildStamp } from 'components/BuildStamp/BuildStamp'
import { Layout } from 'components/pages/layout'
import { rootMetadata } from 'lib/rootMetadata'
import { Inter } from 'next/font/google'

import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  fallback: ['sans-serif'],
})

export const metadata = rootMetadata

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <body>
        <DeployRecover />
        <BuildStamp />
        <main className={inter.className}>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  )
}
