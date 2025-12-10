export default function Features() {
  return (
    <section className="relative bg-gray-50">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-up">
            <h2 className="h1 mb-6 text-gray-900 font-playfair text-3xl sm:text-4xl lg:text-5xl font-normal">
              Lo que hacemos
            </h2>
            <p className="text-lg text-gray-600 font-light">
              En Sambalab diseñamos productos digitales, desarrollamos plataformas a medida e integramos inteligencia artificial desde un enfoque creativo y técnico.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 items-start" data-aos-id-blocks>

            {/* 1st item */}
            <div
              className="relative flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl bg-gray-50">
                <img src="/servicios/feature-web-3d.png" alt="Diseño web 3D" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="h4 mb-3 font-playfair font-bold text-gray-900 text-xl">Diseño y desarrollo web</h4>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Creamos experiencias digitales modernas: desde sitios institucionales hasta landings con diseño responsivo, optimización SEO y despliegue en la nube.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl bg-gray-50">
                <img src="/servicios/feature-ai-3d.png" alt="Software con IA 3D" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="h4 mb-3 font-playfair font-bold text-gray-900 text-xl">Software a medida con IA</h4>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Desarrollamos soluciones completas, desde el frontend al backend, integrando inteligencia artificial, APIs y automatización para potenciar tus procesos.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl bg-gray-50">
                <img src="/servicios/feature-creative-3d.png" alt="Proyectos Creativos 3D" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="h4 mb-3 font-playfair font-bold text-gray-900 text-xl">Proyectos creativos</h4>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Exploramos nuevas formas de interacción entre tecnología, lenguaje y cultura. Aplicamos IA, diseño generativo y herramientas interactivas.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
