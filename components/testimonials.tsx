import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section className="bg-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-4 text-black font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">Nuestro equipo</h2>
            <p className="text-xl text-gray-400">En Sambalab trabajamos desde la colaboración. Somos desarrolladores, diseñadores, estrategas y creadores que combinan tecnología con pensamiento crítico y sensibilidad estética.</p>
          </div>

          {/* Team Cards */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1 */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Daniel García" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283..." />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Full Stack Developer con enfoque en backend e inteligencia artificial. Fundador de Sambalab y explorador constante entre código, lenguaje y arte.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Daniel García</cite> – Fundador, Arquitectura técnica
              </div>
            </div>

            {/* 2 */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Colaborador 2" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283..." />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Diseñadora con sensibilidad editorial y visión sistémica. Da forma visual a los conceptos y cuida cada detalle en la experiencia de usuario.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Nombre del equipo</cite> – Diseño & UI/UX
              </div>
            </div>

            {/* 3 */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Colaborador 3" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283..." />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Ingeniero creativo, con experiencia en automatización y prototipado rápido. Apasionado por crear herramientas útiles, escalables y sostenibles.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Nombre del equipo</cite> – Ingeniería y desarrollo IA
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
