import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    message: '',
    interests: {
      website: false,
      reservationSystem: false,
      menuDigital: false,
      socialMedia: false
    }
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          restaurantName: '',
          message: '',
          interests: {
            website: false,
            reservationSystem: false,
            menuDigital: false,
            socialMedia: false
          }
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforme Seu Restaurante Hoje</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e receba uma proposta personalizada para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
            
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-xl font-bold mb-2">Mensagem Enviada!</h4>
                <p>Obrigado pelo seu interesse. Entraremos em contato em breve com uma proposta personalizada para o seu restaurante.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-1">Nome do Restaurante</label>
                    <input
                      type="text"
                      id="restaurantName"
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Nome do seu restaurante"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Conte-nos sobre o seu restaurante e o que você está procurando..."
                  ></textarea>
                </div>
                
                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">Estou interessado em:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="website"
                        name="website"
                        checked={formData.interests.website}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="website" className="ml-2 text-gray-700">Site Responsivo</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="reservationSystem"
                        name="reservationSystem"
                        checked={formData.interests.reservationSystem}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="reservationSystem" className="ml-2 text-gray-700">Sistema de Reservas</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="menuDigital"
                        name="menuDigital"
                        checked={formData.interests.menuDigital}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="menuDigital" className="ml-2 text-gray-700">Cardápio Digital</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="socialMedia"
                        name="socialMedia"
                        checked={formData.interests.socialMedia}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="socialMedia" className="ml-2 text-gray-700">Integração com Redes Sociais</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center ${
                      formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Proposta Gratuita
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Por Que Escolher Nossos Serviços</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Resultados Rápidos</h4>
                    <p className="text-gray-600">Implementação em até 15 dias com suporte contínuo após o lançamento.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Garantia de Satisfação</h4>
                    <p className="text-gray-600">Se não estiver 100% satisfeito, devolvemos seu investimento nos primeiros 30 dias.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Equipe Especializada</h4>
                    <p className="text-gray-600">Profissionais com mais de 5 anos de experiência no setor de restaurantes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Oferta Especial</h3>
              <p className="text-lg mb-4">
                Entre em contato hoje e ganhe <span className="font-bold">3 meses de manutenção gratuita</span> para o seu site.
              </p>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <p className="font-medium">Oferta válida por tempo limitado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
