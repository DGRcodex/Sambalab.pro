export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-4 text-white font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">Our Services.</h2>
            <p className="text-xl text-gray-400">At our artificial intelligence company, we have implemented innovative solutions in three key areas:</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/assets/analisisenergetico-01.jpeg" alt="Energy Evaluation" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">Energy and Environmental Analysis:</h4>
              <p className="text-lg text-gray-400 text-center text-justify">We use machine learning and predictive analytics to optimize energy consumption and enhance sustainability by identifying patterns and opportunities for savings.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/assets/co2.jpeg" alt="Extensions" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">CO2 Emissions Reduction:</h4>
              <p className="text-lg text-gray-400 text-center text-justify">We apply AI tools to measure and reduce carbon footprints, contributing to a cleaner and more efficient environment.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/assets/herramientasAI-03.jpeg" alt="Environmental Analysis" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2 font-playfair font-normal">AI Tools for Architecture and Design:</h4>
              <p className="text-lg text-gray-400 text-center text-justify">We develop generative AI that assists in creating architectural, musical, and artistic projects, integrating natural language processing and computer vision to enrich creativity.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}