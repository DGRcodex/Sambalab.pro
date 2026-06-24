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
  title: 'Sambalab - Diseño, Desarrollo e Inteligencia',
  description: 'Agencia de desarrollo de software, diseño web e inteligencia artificial.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${architects_daughter.variable} ${playfair.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
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
