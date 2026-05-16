import type { Metadata } from 'next'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
