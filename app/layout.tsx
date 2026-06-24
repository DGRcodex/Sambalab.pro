import './css/style.css'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

import { Inter, Architects_Daughter, Playfair_Display } from 'next/font/google'
import { LanguageProvider } from '@/context/language-context'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import CustomCursor from '@/components/ui/custom-cursor'
import ScrollProgress from '@/components/ui/scroll-progress'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

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
  title: 'Sambalab - Laboratorio Técnico y Desarrollo de Software con IA',
  description: 'Agencia de desarrollo de software, diseño web corporativo e integración de inteligencia artificial. Convertimos ideas complejas en infraestructura digital escalable.',
  keywords: ['Desarrollo de Software', 'Inteligencia Artificial', 'Web Design', 'Next.js', 'Desarrollo MVP', 'Arquitectura Cloud', 'Agencia de Desarrollo'],
  openGraph: {
    title: 'Sambalab - Laboratorio Técnico y Desarrollo de Software con IA',
    description: 'Creamos plataformas, experiencias y herramientas digitales que combinan creatividad, tecnología y visión estratégica.',
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
    title: 'Sambalab - Laboratorio Técnico y Desarrollo con IA',
    description: 'Creamos infraestructura digital con propósito. Desarrollo Full Stack y AI.',
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
          <CustomCursor />
          <ScrollProgress />
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {children}
            <Footer />
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
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
