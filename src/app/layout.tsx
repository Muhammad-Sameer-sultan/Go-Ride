import type { Metadata } from 'next'
import { Outfit ,Inter , Raleway } from 'next/font/google' 
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Go Ride',
  description: 'A car booking website for safe transportation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${outfit.className}`}>{children}</body>
    </html>
  )
}
