import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-dancing font-bold">SABOR LUANDA</h3>
            <p className="text-gray-400">
              Experiência gastronômica única em Luanda, Angola. Sabores autênticos em um ambiente sofisticado e acolhedor.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/saborluanda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com/saborluanda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com/saborluanda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-primary transition-colors">Cardápio</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#reservation" className="text-gray-400 hover:text-primary transition-colors">Reservas</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Horário de Funcionamento</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Segunda-Feira:</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Terça-Feira:</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Quarta-Feira:</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Quinta-Feira:</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sexta-Feira:</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sábado:</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Domingo:</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Avenida 4 de Fevereiro, Luanda, Angola</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-2 flex-shrink-0" />
                <a href="tel:+244923456789" className="text-gray-400 hover:text-primary transition-colors">
                  +244 923 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:info@saborluanda.ao" className="text-gray-400 hover:text-primary transition-colors">
                  info@saborluanda.ao
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Inscreva-se na nossa Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Receba nossas promoções, eventos e novidades diretamente no seu e-mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Sabor Luanda. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacy" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="/terms" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
          <p className="mt-4">
            Desenvolvido por{' '}
            <a 
              href="https://g05th.github.io/meu_portfolio_front_end/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Germano Chita João
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
