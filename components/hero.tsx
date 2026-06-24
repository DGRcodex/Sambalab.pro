'use client'

import { useState } from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';
import ParticlesBackground from '@/components/ui/particles-background';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';

export default function Hero() {
  const [videoOpacity, setVideoOpacity] = useState(1);
  const { t } = useLanguage();

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
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-[120%] object-cover object-top transition-opacity duration-1000 ${videoOpacity === 0 ? 'opacity-0' : 'opacity-100'}`}
          src="/videos/Herodesambalab2.mp4"
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            if (video.duration) {
              // Fade out 1s before end
              if (video.currentTime > video.duration - 1) {
                setVideoOpacity(0);
              }
              // Reset opacity at start (looped)
              if (video.currentTime < 1 && videoOpacity === 0) {
                setVideoOpacity(1);
              }
            }
          }}
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay" />

        {/* Particles Effect */}
        <ParticlesBackground />
      </div>

      {/* Hero content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 pointer-events-none">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center z-10 pointer-events-auto">
          <h1 className="h1 mb-6 text-white font-playfair text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight drop-shadow-lg">
            <motion.span custom={0} initial="hidden" animate="visible" variants={textVariants} className="block">
              {t.hero.title1}
            </motion.span>
            <br className="hidden md:block" />
            <motion.span
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-white to-orange-100 bg-300% animate-gradient"
            >
              {t.hero.title2}
            </motion.span>
          </h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl text-gray-100 mb-10 font-light max-w-2xl leading-relaxed drop-shadow-md"
          >
            {t.hero.subtitle}
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
                className="btn text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 w-full sm:w-auto rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
                href="#services"
              >
                {t.hero.ctaService}
              </a>
            </div>
            <div>
              <a
                className="btn text-white bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 w-full sm:w-auto rounded-full px-8 py-4 text-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                href="#contacto"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
