import React from 'react'
import Link from 'next/link'

export default function Footer() {
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
                Laboratorio creativo y tecnológico. Diseñamos plataformas, creamos herramientas digitales e integramos inteligencia artificial con visión crítica y estética.
              </div>
            </div>

            {/* Link blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* Servicios */}
              <div className="text-sm">
                <h6 className="text-gray-600 font-medium mb-1">Servicios</h6>
                <ul>
                  <li className="mb-1"><Link href="#services" className="text-gray-500 hover:text-purple-700">Desarrollo Web</Link></li>
                  <li className="mb-1"><Link href="#services" className="text-gray-500 hover:text-purple-700">Automatización con IA</Link></li>
                  <li className="mb-1"><Link href="#services" className="text-gray-500 hover:text-purple-700">Prototipado creativo</Link></li>
                </ul>
              </div>

              {/* Recursos */}
              <div className="text-sm">
                <h6 className="text-gray-600 font-medium mb-1">Recursos</h6>
                <ul>
                  <li className="mb-1"><Link href="/blog" className="text-gray-500 hover:text-purple-700">Blog</Link></li>
                  <li className="mb-1"><Link href="/proyectos" className="text-gray-500 hover:text-purple-700">Casos de estudio</Link></li>
                  <li className="mb-1"><Link href="/herramientas" className="text-gray-500 hover:text-purple-700">Herramientas</Link></li>
                </ul>
              </div>

              {/* Nosotros */}
              <div className="text-sm">
                <h6 className="text-gray-600 font-medium mb-1">Nosotros</h6>
                <ul>
                  <li className="mb-1"><Link href="/equipo" className="text-gray-500 hover:text-purple-700">Equipo</Link></li>
                  <li className="mb-1"><Link href="/contacto" className="text-gray-500 hover:text-purple-700">Contacto</Link></li>
                  <li className="mb-1"><Link href="/newsletter" className="text-gray-500 hover:text-purple-700">Newsletter</Link></li>
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
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"><path d="..." /></svg>
                </Link>
              </li>
              {/* Agrega otros si deseas: Twitter, LinkedIn, Instagram */}
            </ul>
            <div className="text-gray-500 text-sm mr-4">&copy; {new Date().getFullYear()} Sambalab. Todos los derechos reservados.</div>
          </div>

        </div>
      </div>
    </footer>
  )
}
