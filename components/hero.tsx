import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="h1 mb-4 text-white" data-aos="fade-up">Gaud-E A. I. Unlock the Power of AI with Gaud-E</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Revolutionize your business with cutting-edge AI solutions for environment and energy.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://gaud-e.app/">Show Me</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Contact Us</a>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative w-full max-w-full mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-200px"
              src="/videos/Video_Gaude.mp4"
              width="1920"
              height="1080"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
