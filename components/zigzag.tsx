import Image from 'next/image'

// Updated images with new 3D renders
import FeatImage01 from '@/public/images/zigzag-ml-3d.png'
import FeatImage02 from '@/public/images/zigzag-frontend-3d.png'
import FeatImage03 from '@/public/images/zigzag-vision-3d.png'
import FeatImage04 from '@/public/images/zigzag-backend-3d.png'
// Reusing creative image from features for now as placeholder for 5th item
import FeatImage05 from '@/public/servicios/feature-creative-3d.png'

export default function Zigzag() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24 border-t border-gray-100">

          {/* Encabezado */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-6 text-gray-900 font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">
              ¿Qué nos impulsa?
            </h2>
            <p className="text-xl text-gray-600 font-light">
              En Sambalab unimos diseño, código e inteligencia artificial para construir soluciones funcionales, escalables e inspiradoras.
            </p>
          </div>

          {/* Ítems */}
          <div className="grid gap-20">

            {/* 1 */}
            <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image src={FeatImage01} alt="IA y Machine Learning" fill className="object-cover" sizes="(max-width: 768px) 100vw, 540px" />
                </div>
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-4 text-gray-900 font-playfair font-bold text-3xl">IA y Machine Learning</h3>
                  <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                    Creamos sistemas inteligentes capaces de aprender de los datos, automatizar decisiones y evolucionar con cada interacción. Desde clasificadores hasta modelos predictivos, aplicamos IA a problemas reales.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 rtl" data-aos="fade-right">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image src={FeatImage02} alt="Frontend Web" fill className="object-cover" sizes="(max-width: 768px) 100vw, 540px" />
                </div>
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-4 text-gray-900 font-playfair font-bold text-3xl">Experiencias web frontend</h3>
                  <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                    Diseñamos interfaces web ágiles, responsivas e intuitivas. Usamos Next.js, Astro y Tailwind para crear espacios digitales bellos y funcionales.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:order-1" data-aos="fade-left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image src={FeatImage03} alt="Computer Vision" fill className="object-cover" sizes="(max-width: 768px) 100vw, 540px" />
                </div>
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-4 text-gray-900 font-playfair font-bold text-3xl">Visión por Computador</h3>
                  <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                    Desarrollamos sistemas de visión artificial capaces de analizar imágenes y videos, detectar patrones y generar interacción visual automatizada. Hacemos que las máquinas vean.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 rtl" data-aos="fade-right">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image src={FeatImage04} alt="Backend" fill className="object-cover" sizes="(max-width: 768px) 100vw, 540px" />
                </div>
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-4 text-gray-900 font-playfair font-bold text-3xl">Backend y Automatización</h3>
                  <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                    Construimos arquitecturas robustas usando Django, FastAPI y Node.js. APIs, autenticación, bases de datos y flujos automatizados para escalar de forma eficiente y segura.
                  </p>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:order-1" data-aos="fade-left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image src={FeatImage05} alt="Prototipado creativo" fill className="object-cover" sizes="(max-width: 768px) 100vw, 540px" />
                </div>
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-4 text-gray-900 font-playfair font-bold text-3xl">Prototipado Creativo</h3>
                  <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                    Experimentamos con interfaces, música, arte y texto mediante IA generativa. Creamos herramientas y experiencias que expanden las fronteras de lo digital.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
