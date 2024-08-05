import Image from 'next/image'

import FeatImage01 from '@/public/images/assets/machineLearning-1.jpeg'
import FeatImage02 from '@/public/images/n2.jpeg'
import FeatImage03 from '@/public/images/assets/computer-vision.jpg'
import FeatImage04 from '@/public/images/assets/predictive.jpeg'
import FeatImage05 from '@/public/images/n5.jpeg'

export default function Zigzag() {
  return (
    <section className="bg-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-white-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4"></div>
            <h1 className="h1 mb-4 text-black font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">Why Choose Us?</h1>
            <p className="text-xl text-gray-400">At our company, we specialize in offering innovative solutions that leverage the power of artificial intelligence. Here are our main services:</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3 text-gray-600 font-playfair font-normal">Machine Learning:</h3>
                  <p className="text-xl text-gray-400 mb-4 font-lato text-justify">We develop machine learning models that allow companies to extract value from their data. Our algorithms are capable of learning from patterns and making accurate predictions, improving decision making and optimizing processes.</p>
                 
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3 text-gray-600 font-playfair font-normal">Natural Language Processes (NLP):</h3>
                  <p className="text-xl text-gray-400 mb-4 font-lato text-justify">We implement natural language processing technologies that facilitate interaction between humans and machines. From chatbots to sentiment analysis, our NLP solutions enable organizations to understand and process human language efficiently.</p>
                  
                </div>
              </div>
            </div>            {/* 3st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3  text-gray-600 font-playfair font-normal">Computer Vision:</h3>
                  <p className="text-xl text-gray-400 mb-4 font-lato text-justify">Our expertise in computer vision allows companies to analyze and understand images and videos. We develop systems that can recognize objects, identify patterns and perform classification tasks, improving automation and security.</p>
                 
                </div>
              </div>
            </div>

            {/* 4nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3  text-gray-600 font-playfair font-normal">Predictive Data Analysis:</h3>
                  <p className="text-xl text-gray-400 mb-4 font-lato text-justify">We offer predictive analytics services that help organizations anticipate future trends and behaviors. Using advanced data analysis techniques, we transform historical information into valuable insights that drive effective strategies.</p>
                
                </div>
              </div>

            </div>

            {/* 5st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage05} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3  text-gray-600 font-playfair font-normal">Generative AI in Architecture, Music and Art:</h3>
                  <p className="text-xl text-gray-400 mb-4 font-lato text-justify">We explore the potential of generative artificial intelligence in various creative disciplines. From creating innovative architectural designs to composing music and generating works of art, our solutions.</p>
                 
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
