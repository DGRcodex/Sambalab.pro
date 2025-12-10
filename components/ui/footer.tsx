'use client'
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/language-context'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-purple-100">
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* Branding */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                <Link href="/" className="block" aria-label="Sambalab">
                  <span className="font-bold text-lg text-gray-900 hover:text-purple-800 transition duration-150 ease-in-out">
                    Sambalab
                  </span>
                </Link>
              </div>
              <div className="text-gray-500">
                {t.footer.description}
              </div>
            </div>

            {/* Link blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* Servicios */}
              <div className="text-sm">
                <h6 className="text-gray-600 font-medium mb-1">{t.footer.services}</h6>
                <ul>
                  <li className="mb-1"><Link href="#services" className="text-gray-500 hover:text-purple-700">{t.footer.links.webDev}</Link></li>
                  <li className="mb-1"><Link href="#services" className="text-gray-500 hover:text-purple-700">{t.footer.links.aiAuto}</Link></li>
                  <li className="mb-1"><Link href="#services" className="text-gray-500 hover:text-purple-700">{t.footer.links.proto}</Link></li>
                </ul>
              </div>

              {/* Recursos */}
              <div className="text-sm">
                <h6 className="text-gray-600 font-medium mb-1">{t.footer.resources}</h6>
                <ul>
                  <li className="mb-1"><a href="https://www.linkedin.com/company/sambalab/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-700">{t.footer.links.blog}</a></li>
                  <li className="mb-1"><Link href="#proyectos" className="text-gray-500 hover:text-purple-700">{t.footer.links.cases}</Link></li>
                  <li className="mb-1"><Link href="#services" className="text-gray-500 hover:text-purple-700">{t.footer.links.tools}</Link></li>
                </ul>
              </div>

              {/* Nosotros */}
              <div className="text-sm">
                <h6 className="text-gray-600 font-medium mb-1">{t.footer.about}</h6>
                <ul>
                  <li className="mb-1"><Link href="#equipo" className="text-gray-500 hover:text-purple-700">{t.footer.team}</Link></li>
                  <li className="mb-1"><Link href="#contacto" className="text-gray-500 hover:text-purple-700">{t.footer.contact}</Link></li>
                  <li className="mb-1"><Link href="/newsletter" className="text-gray-500 hover:text-purple-700">{t.footer.newsletter}</Link></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom */}
          <div className="md:flex md:items-center md:justify-between">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* Social icons */}
              <li>
                <Link href="https://github.com/DGRcodex" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="GitHub">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"><path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.3.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.3-.8 2.3-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" /></svg>
                </Link>
              </li>
              {/* Agrega otros si deseas: Twitter, LinkedIn, Instagram */}
            </ul>
            <div className="text-gray-500 text-sm mr-4">&copy; {new Date().getFullYear()} {t.footer.rights}</div>
          </div>

        </div>
      </div>
    </footer>
  )
}
