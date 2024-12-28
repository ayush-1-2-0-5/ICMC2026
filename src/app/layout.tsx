import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavHeader } from "@/components/nav-header"

import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ICMC 2026 | HOME',
  description: 'International Conference on Cryptology in India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}

