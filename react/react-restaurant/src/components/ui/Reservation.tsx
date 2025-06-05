import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import Button from './Button';

interface ReservationProps {
  className?: string;
}

const Reservation: React.FC<ReservationProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio do formulário
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Reserva recebida com sucesso! Entraremos em contacto em breve para confirmar.',
      });
      
      // Limpar formulário após sucesso
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
        message: '',
      });
      
      // Limpar mensagem após alguns segundos
      setTimeout(() => {
        setFormStatus({ type: null, message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="reservation" className={`py-20 bg-primary/5 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Faça sua Reserva</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reserve sua mesa e prepare-se para uma experiência gastronômica inesquecível.
            Recomendamos reservas com antecedência para garantir disponibilidade.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-primary p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Informações de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horário de Funcionamento</h4>
                    <p className="text-sm opacity-90">Segunda a Sábado: 12h00 - 23h00</p>
                    <p className="text-sm opacity-90">Domingo: 12h00 - 22h00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Reservas</h4>
                    <p className="text-sm opacity-90">Recomendamos reservas com pelo menos 2 horas de antecedência</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Grupos</h4>
                    <p className="text-sm opacity-90">Para grupos acima de 8 pessoas, entre em contacto direto pelo telefone</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Contacto</h4>
                    <p className="text-sm opacity-90">+244 923 456 789</p>
                    <p className="text-sm opacity-90">reservas@saborluanda.ao</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Data*
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Hora*
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Pessoas*
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="5">5 pessoas</option>
                      <option value="6">6 pessoas</option>
                      <option value="7">7 pessoas</option>
                      <option value="8">8 pessoas</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
                    Ocasião (opcional)
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione</option>
                    <option value="aniversario">Aniversário</option>
                    <option value="negocios">Reunião de Negócios</option>
                    <option value="romantico">Jantar Romântico</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Observações (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Alergias, preferências, pedidos especiais..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full">
                    Confirmar Reserva
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

export default Reservation;
