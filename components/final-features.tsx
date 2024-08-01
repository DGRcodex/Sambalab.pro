export default function FinalFeatures() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* New title */}
                    <div className="max-w-3xl mx-auto text-center py-12">
                        <h3 className="h1 mb-4 text-white font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">We help you with interiors and exteriors</h3>
                    </div>

                    {/* Additional items */}
                    <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
                            <img src="/images/exterior-ai.png" alt="Exterior AI" className="w-full h-auto rounded-lg mb-6" />
                            <h4 className="h4 mb-2 font-playfair font-normal">Exterior AI</h4>
                            <p className="text-lg text-gray-400 text-center">Generate various architectural visualizations for exteriors.</p>
                        </div>

                        {/* 5th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
                            <img src="/images/interior-ai.png" alt="Interior AI" className="w-full h-auto rounded-lg mb-6" />
                            <h4 className="h4 mb-2 font-playfair font-normal">Interior AI</h4>
                            <p className="text-lg text-gray-400 text-center">Reimagine any room with more than 20 design styles to create interiors in seconds. Control finishes, colors, and lighting.</p>
                        </div>

                        {/* 6th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
                            <img src="/images/masterplan-ai.png" alt="Masterplan AI" className="w-full h-auto rounded-lg mb-6" />
                            <h4 className="h4 mb-2 font-playfair font-normal">Masterplan AI</h4>
                            <p className="text-lg text-gray-400 text-center">Generate a lot, a 3D condominium, or a landscaping project from just a sketch or photo.</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}