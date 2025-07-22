import Image from 'next/image'

import FeatImage01 from '@/public/images/assets/MachineLearning-1.jpeg'
import FeatImage02 from '@/public/images/n2.jpeg'
import FeatImage03 from '@/public/images/assets/computer-vision.jpg'
import FeatImage04 from '@/public/images/assets/predictive.jpeg'
import FeatImage05 from '@/public/images/n5.jpeg'

export default function Zigzag() {
  return (
    <section className="bg-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-white-800">

          {/* Encabezado */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 text-black font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">¿Qué nos impulsa?</h1>
            <p className="text-xl text-gray-400">En Sambalab unimos diseño, código e inteligencia artificial para construir soluciones funcionales, escalables e inspiradoras.</p>
          </div>

          {/* Ítems */}
          <div className="grid gap-20">

            {/* 1 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                <Image src={FeatImage01} width={540} height={405} alt="IA y Machine Learning" />
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-gray-600 font-playfair font-normal">IA y Machine Learning</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">Creamos sistemas inteligentes capaces de aprender de los datos, automatizar decisiones y evolucionar con cada interacción. Desde clasificadores hasta modelos predictivos, aplicamos IA a problemas reales.</p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 rtl">
                <Image src={FeatImage02} width={540} height={405} alt="Frontend Web" />
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3 text-gray-600 font-playfair font-normal">Experiencias web frontend</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">Diseñamos interfaces web ágiles, responsivas e intuitivas. Usamos Next.js, Astro y Tailwind para crear espacios digitales bellos y funcionales.</p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:order-1">
                <Image src={FeatImage03} width={540} height={405} alt="Computer Vision" />
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-gray-600 font-playfair font-normal">Visión por Computador</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">Desarrollamos sistemas de visión artificial capaces de analizar imágenes y videos, detectar patrones y generar interacción visual automatizada. Hacemos que las máquinas vean.</p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 rtl">
                <Image src={FeatImage04} width={540} height={405} alt="Backend" />
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3 text-gray-600 font-playfair font-normal">Backend y Automatización</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">Construimos arquitecturas robustas usando Django, FastAPI y Node.js. APIs, autenticación, bases de datos y flujos automatizados para escalar de forma eficiente y segura.</p>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:order-1">
                <Image src={FeatImage05} width={540} height={405} alt="Prototipado creativo" />
              </div>
              <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-gray-600 font-playfair font-normal">Prototipado Creativo</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">Experimentamos con interfaces, música, arte y texto mediante IA generativa. Creamos herramientas y experiencias que expanden las fronteras de lo digital.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
