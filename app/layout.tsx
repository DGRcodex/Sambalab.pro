import './css/style.css'

import { Inter, EB_Garamond, JetBrains_Mono } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
})

const displayFont = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '700']
})

const accentFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400'],
  display: 'swap'
})

export const metadata = {
  title: 'Sambalab',
  description: 'Laboratorio creativo y tecnológico',
  icons: {
    icon: '/favicon.ico', // Esto conecta con /public/favicon.ico
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${accentFont.variable} font-body antialiased bg-sambalab text-sambalab-dark tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          
        </div>
      </body>
    </html>
  )
}
