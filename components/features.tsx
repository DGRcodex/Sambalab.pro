export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-4 text-white font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">Our Services.</h2>
            <p className="text-xl text-gray-400">We apply artificial intelligence to architectural design to obtain optimal results in energy efficiency and environmental aspects.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/energy-evaluation.png" alt="Energy Evaluation" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">Energy Evaluation</h4>
              <p className="text-lg text-gray-400 text-center">Get an energy and environmental analysis of your project from photos or videos.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/extensions.png" alt="Extensions" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">Extensions</h4>
              <p className="text-lg text-gray-400 text-center">Generate an expansion proposal for your home from a sketch or photo.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/environmental-analysis.png" alt="Environmental Analysis" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">Environmental Analysis</h4>
              <p className="text-lg text-gray-400 text-center">Obtain an energy, climatic, and environmental analysis of your project from photos or videos.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}