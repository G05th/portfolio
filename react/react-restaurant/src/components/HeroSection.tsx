import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    title: 'Transforme a Presença Digital do Seu Restaurante',
    subtitle: 'Sites que atraem clientes e aumentam reservas em até 30%'
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    title: 'Destaque-se da Concorrência',
    subtitle: 'Soluções web premium para restaurantes exigentes'
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    title: 'Aumente suas Reservas',
    subtitle: 'Experiências digitais que convertem visitantes em clientes'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startSlideshow = () => {
    slideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 5000);
  };

  const stopSlideshow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const resetSlideshow = () => {
    stopSlideshow();
    startSlideshow();
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetSlideshow();
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetSlideshow();
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const setSlide = (index: number) => {
    if (isAnimating || currentSlide === index) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    resetSlideshow();
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    startSlideshow();
    return () => stopSlideshow();
  }, []);

  return (
    <section className="hero h-screen relative overflow-hidden">
      {/* Slides */}
      <div className="hero-slider h-full">
        <AnimatePresence>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                zIndex: currentSlide === index ? 10 : 0 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="hero-slide absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                pointerEvents: currentSlide === index ? 'auto' : 'none'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-dancing"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white mb-8"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <a 
                      href="#demo" 
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
                    >
                      Ver Demonstração
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="#contact" 
                      className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
                    >
                      Falar com Especialista
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary z-20"
        aria-label="Slide anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary z-20"
        aria-label="Próximo slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="block text-sm mb-2">Deslize para baixo</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
