import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';
import Button from './ui/Button';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled || !transparent
      ? 'bg-black/90 backdrop-blur-md shadow-md'
      : transparent
      ? 'bg-transparent'
      : 'bg-black'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-white font-dancing text-2xl font-bold">SABOR LUANDA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-white hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white hover:text-primary transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>

            <Button variant="primary" size="sm">
              Reservar Mesa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black/95 z-50 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <a href="#" className="text-white font-dancing text-2xl font-bold">
              SABOR LUANDA
            </a>
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 space-y-8">
            <ul className="flex flex-col items-center space-y-6">
              <li>
                <a
                  href="#home"
                  className="text-white text-xl hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white text-xl hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-white text-xl hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Cardápio
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white text-xl hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white text-xl hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Contacto
                </a>
              </li>
            </ul>

            <Button variant="primary" onClick={toggleMenu}>
              Reservar Mesa
            </Button>

            <div className="flex space-x-6 mt-8">
              <a
                href="https://instagram.com/saborluanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/saborluanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="tel:+244923456789"
                className="text-white hover:text-primary transition-colors"
                aria-label="Telefone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
