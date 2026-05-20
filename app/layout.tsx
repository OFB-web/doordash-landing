import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Syne } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'

/* Body / UI font — warm, humanist, very popular on modern landing pages */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

/* Display / heading font — editorial, expressive, used by agency & startup sites */
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['700', '800'],
})

export const metadata: Metadata = {
  title: 'DoorDash — Deliver Anything. Instantly.',
  description: 'On-demand package delivery and rider platform. Send, receive, and track packages in real time across Africa.',
  keywords: ['delivery', 'package', 'rider', 'instant', 'on-demand', 'tracking', 'africa'],
  openGraph: {
    title: 'DoorDash — Deliver Anything. Instantly.',
    description: 'The fastest way to send and receive anything across Africa.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${syne.variable}`}>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
