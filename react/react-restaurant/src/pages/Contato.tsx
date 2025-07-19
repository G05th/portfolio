
import React, { useState } from 'react';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de e-mail inválido';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
      isValid = false;
    } // Add more specific phone validation if needed
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data Submitted:', formData); // Simulate submission
      setIsSubmitted(true);
      // Reset form after a delay or keep it filled
      // setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section id="contato" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        
        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center" role="alert">
            <strong className="font-bold">Obrigado!</strong>
            <span className="block sm:inline"> Sua mensagem foi enviada com sucesso.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
              <input
                type="tel" // Use tel for better mobile experience
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>
              {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contato;

