import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';

export default function Hero() {
  return (
    <section className="relative h-screen w-screen">
      <div className="h-full w-full">

        {/* Hero content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center">

          {/* Section header */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="h1 mb-4 text-white font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal" data-aos="fade-up">The Power of AI with Gaud-E</h1>
            <p className="text-xl text-white mb-8 font-lato" data-aos="fade-up" data-aos-delay="200">Revolutionize your business with cutting-edge AI solutions for environment and energy.</p>
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
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/videos/Video_Gaude.mp4"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
