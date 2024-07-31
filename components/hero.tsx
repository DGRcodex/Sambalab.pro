import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';

export default function Hero() {
  return (
    // Ajuste 1: Asegúrate de que el hero ocupe toda la pantalla con h-screen
    <section className="relative h-screen overflow-hidden">
      {/* Ajuste 2: Remover paddings innecesarios para ocupar toda la pantalla */}
      <div className="max-w-6xl mx-auto relative h-full">

        {/* Hero content */}
        {/* Ajuste 3: Usar flexbox para centrar el contenido sobre el video */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">

          {/* Section header */}
          {/* Ajuste 4: Asegúrate de que el texto sea visible sobre el video */}
          <div className="flex flex-col items-center justify-center text-center z-10">
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
        </div>

        {/* Video */}
        {/* Ajuste 5: El video ocupa todo el contenedor del hero */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/videos/Video_Gaude.mp4"
            width="1920"
            height="1080"
          />
        </div>
      </div>
    </section>
  );
}
