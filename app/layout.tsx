import './css/style.css'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

import { Inter, Architects_Daughter, Playfair_Display } from 'next/font/google'
import { LanguageProvider } from '@/context/language-context'

import SchemaMarkup from '@/components/seo/SchemaMarkup'
import LayoutShell from '@/components/ui/layout-shell'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})

export const metadata = {
  metadataBase: new URL('https://sambalab.pro'),
  title: 'Sambalab - Laboratorio de Ingeniería Digital y Producto',
  description: 'Ingeniería de software profesional, producto digital end-to-end y co-creación estratégica. Dominamos las herramientas más avanzadas — incluida la IA — para construir plataformas que escalan desde el día uno.',
  keywords: ['Ingeniería de Software', 'Producto Digital', 'Co-creación', 'Desarrollo End-to-End', 'MVP Escalable', 'Arquitectura Cloud', 'Next.js', 'IA Aplicada'],
  openGraph: {
    title: 'Sambalab — Ingeniería de Producto y Co-creación Digital',
    description: 'Construimos productos digitales completos con las herramientas más avanzadas del mercado. Desde la idea hasta producción, solos o contigo.',
    url: 'https://sambalab.pro',
    siteName: 'Sambalab',
    images: [
      {
        url: '/sambalablogo.png',
        width: 1200,
        height: 630,
        alt: 'Sambalab Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sambalab — Ingeniería de Producto y Co-creación Digital',
    description: 'Ingeniería de producto end-to-end. IA, Cloud, y código profesional que escala.',
    images: ['/sambalablogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${inter.variable} ${architects_daughter.variable} ${playfair.variable} font-inter antialiased bg-slate-50 text-gray-900 tracking-tight`}>
        <LanguageProvider>
          <LayoutShell>
            {children}
          </LayoutShell>
          <Analytics />
          <SpeedInsights />
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uyt3jfu02l");
            `}
          </Script>
        </LanguageProvider>
      </body>
    </html>
  )
}

