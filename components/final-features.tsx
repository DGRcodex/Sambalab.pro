export default function FinalFeatures() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section title */}
            <div className="max-w-3xl mx-auto text-center py-12">
              <h3 className="h1 mb-4 text-white font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">
                Imaginamos, prototipamos, creamos
              </h3>
            </div>
  
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
  
              {/* 1st item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
                <img src="/servicios/5.png" alt="Prototipado rápido" className="w-full h-auto rounded-lg mb-6" />
                <h4 className="h4 mb-2 font-playfair font-normal">Prototipado rápido</h4>
                <p className="text-lg text-gray-400 text-center">Damos forma a ideas complejas a través de prototipos funcionales. Creamos MVPs, simuladores y flujos interactivos para validar conceptos desde el inicio.</p>
              </div>
  
              {/* 2nd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
                <img src="/servicios/9.png" alt="Inteligencia artificial creativa" className="w-full h-auto rounded-lg mb-6" />
                <h4 className="h4 mb-2 font-playfair font-normal">IA generativa aplicada</h4>
                <p className="text-lg text-gray-400 text-center">Utilizamos modelos de lenguaje, visión por computador y herramientas generativas para crear nuevas formas de diseño, contenido y automatización creativa.</p>
              </div>
  
              {/* 3rd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
                <img src="/servicios/2.png" alt="Laboratorio Digital" className="w-full h-auto rounded-lg mb-6" />
                <h4 className="h4 mb-2 font-playfair font-normal">Laboratorio digital</h4>
                <p className="text-lg text-gray-400 text-center">Experimentamos con interfaces, datos, interacción y arte. Sambalab es también un espacio de prueba, juego y exploración de tecnologías emergentes con propósito.</p>
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  