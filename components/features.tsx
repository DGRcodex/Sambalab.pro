export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-4 text-white font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">Lo que hacemos.</h2>
            <p className="text-xl text-gray-400">En Sambalab diseñamos productos digitales, desarrollamos plataformas a medida e integramos inteligencia artificial desde un enfoque creativo y técnico.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/servicios/11.png" alt="Diseño web" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">Diseño y desarrollo web</h4>
              <p className="text-lg text-gray-400 text-center text-justify">Creamos experiencias digitales modernas: desde sitios institucionales hasta landings con diseño responsivo, optimización SEO y despliegue en la nube.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/servicios/13.png" alt="Software con IA" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">Software a medida con IA</h4>
              <p className="text-lg text-gray-400 text-center text-justify">Desarrollamos soluciones completas, desde el frontend al backend, integrando inteligencia artificial, APIs y automatización para potenciar tus procesos.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/servicios/8.png" alt="Proyectos Creativos" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">Proyectos creativos y experimentales</h4>
              <p className="text-lg text-gray-400 text-center text-justify">Exploramos nuevas formas de interacción entre tecnología, lenguaje y cultura. Aplicamos IA, diseño generativo y herramientas interactivas para abrir nuevos caminos.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
