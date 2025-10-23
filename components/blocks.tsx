// components/Blocks.tsx
import Image from "next/image";

export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Nuestros servicios</h2>
            <p className="text-xl text-gray-400">
              En Sambalab combinamos diseño, desarrollo e inteligencia artificial para crear soluciones digitales escalables, funcionales y creativas.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >

            {/* 1 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Image
                src="/iconos/icono1.png"   // Diseño web y UI/UX
                alt="Diseño web y UI/UX"
                width={96} height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 object-contain"
                sizes="(min-width:1024px) 96px, (min-width:768px) 80px, 64px"
                priority
              />
              <h4 className="h4 mb-2">Diseño web y UI/UX</h4>
              <p className="text-lg text-gray-400 text-center">
                Diseñamos interfaces visuales modernas, accesibles y funcionales, con foco en la experiencia del usuario y coherencia estética para cada proyecto.
              </p>
            </div>

            {/* 2 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image
                src="/iconos/icono2.png"   // Desarrollo de plataformas
                alt="Desarrollo de plataformas"
                width={96} height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 object-contain"
                sizes="(min-width:1024px) 96px, (min-width:768px) 80px, 64px"
                priority
              />
              <h4 className="h4 mb-2">Desarrollo de plataformas</h4>
              <p className="text-lg text-gray-400 text-center">
                Creamos plataformas robustas y escalables usando Next.js, Django y Supabase. Integramos APIs, bases de datos y servicios en la nube.
              </p>
            </div>

            {/* 3 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Image
                src="/iconos/icono3.png"   // Automatización con IA
                alt="Automatización con IA"
                width={96} height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 object-contain"
                sizes="(min-width:1024px) 96px, (min-width:768px) 80px, 64px"
                priority
              />
              <h4 className="h4 mb-2">Automatización con IA</h4>
              <p className="text-lg text-gray-400 text-center">
                Integramos modelos de lenguaje y visión computacional para optimizar tareas, enriquecer experiencias y reducir tiempos en flujos digitales.
              </p>
            </div>

            {/* 4 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <Image
                src="/iconos/icono4.png"   // Prototipado creativo
                alt="Prototipado creativo"
                width={96} height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 object-contain"
                sizes="(min-width:1024px) 96px, (min-width:768px) 80px, 64px"
              />
              <h4 className="h4 mb-2">Prototipado creativo</h4>
              <p className="text-lg text-gray-400 text-center">
                Construimos MVPs, pruebas de concepto e interfaces interactivas para validar ideas rápidamente y adaptarlas a nuevos escenarios tecnológicos.
              </p>
            </div>

            {/* 5 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <Image
                src="/iconos/icono5.png"   // Consultoría estratégica
                alt="Consultoría estratégica"
                width={96} height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 object-contain"
                sizes="(min-width:1024px) 96px, (min-width:768px) 80px, 64px"
              />
              <h4 className="h4 mb-2">Consultoría estratégica</h4>
              <p className="text-lg text-gray-400 text-center">
                Acompañamos procesos de transformación digital con visión técnica y creativa. Desde arquitectura hasta marketing digital basado en datos.
              </p>
            </div>

            {/* 6 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <Image
                src="/iconos/icono6.png"   // Lenguaje, arte y tecnología
                alt="Lenguaje, arte y tecnología"
                width={96} height={96}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 object-contain"
                sizes="(min-width:1024px) 96px, (min-width:768px) 80px, 64px"
              />
              <h4 className="h4 mb-2">Lenguaje, arte y tecnología</h4>
              <p className="text-lg text-gray-400 text-center">
                Exploramos las fronteras entre IA, poesía, arte visual e interacción humana. Creamos herramientas que combinan sentido, expresión y código.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
