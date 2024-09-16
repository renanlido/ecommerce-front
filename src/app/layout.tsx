import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Header } from '@/components/header'
import './globals.css'

const integralCF = localFont({
  src: [
    {
      path: '../../public/fonts/Fontspring-DEMO-integralcf-bold.otf',
      weight: 'bold',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-integralcf-extrabold.otf',
      weight: '800',
    },
    {
      path: '../../public/fonts/integralcf-heavy.otf',
      weight: '900',
    },
  ],
  variable: '--font-integralcf',
})

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Bold.ttf',
      weight: 'bold',
    },
    {
      path: '../../public/fonts/Satoshi-Regular.ttf',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.ttf',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Light.ttf',
      weight: '100',
    },
  ],
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${integralCF.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
