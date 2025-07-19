import { useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Carlos Mendes",
      position: "Proprietário, Restaurante Sabor do Mar",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "Desde que implementamos o novo site, nossas reservas online aumentaram em 45%. A interface é intuitiva e os clientes adoram poder ver o cardápio e fazer reservas diretamente pelo celular.",
      metrics: "Aumento de 45% em reservas online"
    },
    {
      name: "Ana Sousa",
      position: "Gerente, Bistrô Oliveira",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "O retorno sobre o investimento foi impressionante. Em apenas 3 meses, o site se pagou completamente com o aumento de clientes. A equipe foi extremamente profissional e atenciosa durante todo o processo.",
      metrics: "ROI completo em 3 meses"
    },
    {
      name: "Miguel Santos",
      position: "Chef e Proprietário, Cantina Italiana",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "O que mais me impressionou foi como o site capturou perfeitamente a essência do meu restaurante. As fotos, as cores, tudo comunica exatamente o que queremos transmitir aos nossos clientes.",
      metrics: "Aumento de 60% no tráfego do site"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossos sites têm ajudado restaurantes a crescer e prosperar no mundo digital.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-lg p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-xl italic mb-6">"{testimonial.content}"</blockquote>
                        <div className="mb-4">
                          <h4 className="text-lg font-bold">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                        <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                            {testimonial.metrics}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary z-10"
            aria-label="Depoimento anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary z-10"
            aria-label="Próximo depoimento"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
          >
            Quero Resultados Como Estes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
