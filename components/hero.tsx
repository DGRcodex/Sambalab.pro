'use client'

import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';
import ParticlesBackground from '@/components/ui/particles-background';
import { motion } from 'framer-motion';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any // Custom easeOutCubic bezier
      }
    })
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/videos/Herodesambalab.mp4"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay" />

        {/* Particles Effect */}
        <ParticlesBackground />
      </div>

      {/* Hero content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 pointer-events-none">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center z-10 pointer-events-auto">
          <h1 className="h1 mb-6 text-white font-playfair text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight drop-shadow-lg">
            <motion.span custom={0} initial="hidden" animate="visible" variants={textVariants} className="block">
              Diseño, desarrollo e
            </motion.span>
            <br className="hidden md:block" />
            <motion.span
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-300% animate-gradient"
            >
              inteligencia con propósito
            </motion.span>
          </h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl text-gray-100 mb-10 font-light max-w-2xl leading-relaxed drop-shadow-md"
          >
            En Sambalab creamos plataformas, experiencias y herramientas digitales que combinan creatividad, tecnología y visión estratégica.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <div>
              <a
                className="btn text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 w-full sm:w-auto rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
                href="#services"
              >
                Conoce nuestros servicios
              </a>
            </div>
            <div>
              <a
                className="btn text-white bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 w-full sm:w-auto rounded-full px-8 py-4 text-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                href="#contacto"
              >
                Escríbenos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
