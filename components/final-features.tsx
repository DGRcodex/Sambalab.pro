'use client'
import { useLanguage } from '@/context/language-context'

export default function FinalFeatures() {
  const { t } = useLanguage()

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section title */}
          <div className="max-w-3xl mx-auto text-center py-12">
            <h3 className="h1 mb-4 text-white font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">
              {t.finalFeatures.title}
            </h3>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-full h-64 relative mb-6 overflow-hidden rounded-lg">
                <img src="/images/sambalab-prototyping.webp" alt={t.finalFeatures.item1Title} className="w-full h-full object-cover" />
              </div>
              <h4 className="h4 mb-2 font-playfair font-normal">{t.finalFeatures.item1Title}</h4>
              <p className="text-lg text-gray-400 text-center">{t.finalFeatures.item1Desc}</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-full h-64 relative mb-6 overflow-hidden rounded-lg">
                <img src="/images/sambalab-ai.webp" alt={t.finalFeatures.item2Title} className="w-full h-full object-cover" />
              </div>
              <h4 className="h4 mb-2 font-playfair font-normal">{t.finalFeatures.item2Title}</h4>
              <p className="text-lg text-gray-400 text-center">{t.finalFeatures.item2Desc}</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-full h-64 relative mb-6 overflow-hidden rounded-lg">
                <img src="/images/sambalab-lab.webp" alt={t.finalFeatures.item3Title} className="w-full h-full object-cover" />
              </div>
              <h4 className="h4 mb-2 font-playfair font-normal">{t.finalFeatures.item3Title}</h4>
              <p className="text-lg text-gray-400 text-center">{t.finalFeatures.item3Desc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
