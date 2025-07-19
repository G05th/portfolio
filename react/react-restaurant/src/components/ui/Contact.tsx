import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import Button from './Button';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  const [formStatus, setFormStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulação de envio do formulário
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Responderemos em breve.',
      });
      
      // Limpar formulário
      const form = e.target as HTMLFormElement;
      form.reset();
      
      // Limpar mensagem após alguns segundos
      setTimeout(() => {
        setFormStatus({ type: null, message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contacto</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Entre em contacto connosco e teremos prazer em ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6">Informações de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Localização</h4>
                      <p className="text-gray-600">Avenida 4 de Fevereiro, Luanda, Angola</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Telefone</h4>
                      <p className="text-gray-600">+244 923 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">E-mail</h4>
                      <p className="text-gray-600">info@saborluanda.ao</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Horário de Funcionamento</h4>
                      <p className="text-gray-600">Segunda a Sábado: 12h00 - 23h00</p>
                      <p className="text-gray-600">Domingo: 12h00 - 22h00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Siga-nos</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/saborluanda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://facebook.com/saborluanda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://twitter.com/saborluanda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.0876!2d13.2344444!3d-8.8383333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ3LjIiUyA0NsKwMzknMDcuNyJX!5e0!3m2!1spt-BR!2sbr!4v1631234567890" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Localização do Sabor Luanda"
                className="w-full"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6">Envie-nos uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="reserva">Reserva</option>
                    <option value="evento">Evento Privado</option>
                    <option value="feedback">Feedback</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full">
                    Enviar Mensagem
                  </Button>
                </div>
                
                {formStatus.type && (
                  <div
                    className={`mt-4 p-3 rounded-md ${
                      formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
