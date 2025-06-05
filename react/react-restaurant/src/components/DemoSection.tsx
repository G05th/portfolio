import { useState } from 'react';
import { motion } from 'framer-motion';

const DemoSection = () => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Design Responsivo Premium',
      description: 'Experiência perfeita em qualquer dispositivo, desde smartphones até grandes monitores.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Sistema de Reservas Online',
      description: 'Permita que seus clientes façam reservas 24/7, sem necessidade de telefonemas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Cardápio Digital Interativo',
      description: 'Apresente seus pratos com fotos de alta qualidade e descrições detalhadas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Integração com Redes Sociais',
      description: 'Conecte seu site às suas redes sociais para aumentar seu alcance e engajamento.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    }
  ];

  const deviceImages = {
    desktop: '../assets/hero1.jpg',
    tablet: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    mobile: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  };

  return (
    <section className="py-20 bg-white" id="demo">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja Como Seu Site Pode Ficar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimente as funcionalidades que transformarão a presença digital do seu restaurante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Device Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-xl p-4 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-700 rounded px-2 py-1 text-xs text-gray-300 font-mono">
                  {activeDevice === 'desktop' ? 'www.seurestaurante.com' : 
                   activeDevice === 'tablet' ? 'seurestaurante.com' : 'm.seurestaurante.com'}
                </div>
              </div>
              <div className={`overflow-hidden rounded-lg ${
                activeDevice === 'desktop' ? 'aspect-video' : 
                activeDevice === 'tablet' ? 'aspect-[3/4]' : 'aspect-[9/16]'
              }`}>
                <img 
                  src={deviceImages[activeDevice]} 
                  alt={`Visualização em ${activeDevice}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Device Selector */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={() => setActiveDevice('desktop')}
                className={`p-3 rounded-lg transition-all ${
                  activeDevice === 'desktop' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                aria-label="Visualizar em desktop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveDevice('tablet')}
                className={`p-3 rounded-lg transition-all ${
                  activeDevice === 'tablet' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                aria-label="Visualizar em tablet"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveDevice('mobile')}
                className={`p-3 rounded-lg transition-all ${
                  activeDevice === 'mobile' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                aria-label="Visualizar em mobile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Funcionalidades Premium</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    activeFeature === index 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${
                      activeFeature === index ? 'bg-white/20' : 'bg-primary/10'
                    } mr-4`}>
                      <div className={activeFeature === index ? 'text-white' : 'text-primary'}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <p className={activeFeature === index ? 'text-white/90' : 'text-gray-600'}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
              >
                Quero um Site Assim
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
