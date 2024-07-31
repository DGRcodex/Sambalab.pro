export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-playfair font-normal">Our Services.</h2>
            <p className="text-xl text-gray-400">We apply artificial intelligence to architectural design to obtain optimal results in energy efficiency and environmental aspects.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/energy-evaluation.png" alt="Energy Evaluation" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2">Energy Evaluation</h4>
              <p className="text-lg text-gray-400 text-center">Get an energy and environmental analysis of your project from photos or videos.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/extensions.png" alt="Extensions" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2">Extensions</h4>
              <p className="text-lg text-gray-400 text-center">Generate an expansion proposal for your home from a sketch or photo.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/environmental-analysis.png" alt="Environmental Analysis" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2">Environmental Analysis</h4>
              <p className="text-lg text-gray-400 text-center">Obtain an energy, climatic, and environmental analysis of your project from photos or videos.</p>
            </div>

          </div>

          {/* New title */}
          <div className="max-w-3xl mx-auto text-center py-12">
            <h3 className="h3 mb-4 font-playfair font-normal">We help you with interiors and exteriors</h3>
          </div>

          {/* Additional items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/exterior-ai.png" alt="Exterior AI" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2">Exterior AI</h4>
              <p className="text-lg text-gray-400 text-center">Generate various architectural visualizations for exteriors.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/interior-ai.png" alt="Interior AI" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2">Interior AI</h4>
              <p className="text-lg text-gray-400 text-center">Reimagine any room with more than 20 design styles to create interiors in seconds. Control finishes, colors, and lighting.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <img src="/images/masterplan-ai.png
              " alt="Masterplan AI" className="w-full h-auto rounded-lg mb-6" />
              <h4 className="h4 mb-2">Masterplan AI</h4>
              <p className="text-lg text-gray-400 text-center">Generate a lot, a 3D condominium, or a landscaping project from just a sketch or photo.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
