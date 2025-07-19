
import React from 'react';
import HeroSection from '../components/Hero'; 
import MenuSection from '../components/Menu'; // Assuming Menu.tsx defines MenuItem interface
import GallerySection from '../components/Gallery'; // Assuming Gallery.tsx defines GalleryImage interface
import TestimonialsSection from '../components/Testimonials'; // Assuming Testimonials.tsx defines TestimonialProps interface
import hero1 from '../assets/hero1.jpg'; // Adjusted import to match the expected prop types
import testimonial1 from '../assets/testimonial1.jpg'; // Adjusted import to match the expected prop types
import testimonial2 from '../assets/testimonial2.jpg'; // Adjusted import to match the expected prop types
import testimonial3 from '../assets/testimonial3.jpg'; // Adjusted import to match the expected prop types
import prato1 from '../assets/prato1.jpeg'; // Adjusted import to match the expected prop types
import prato2 from '../assets/prato2.jpeg'; // Adjusted import to match the expected prop types
import prato3 from '../assets/prato3.jpeg'; // Adjusted import to match the expected prop types
import prato4 from '../assets/prato4.jpeg'; // Adjusted import to match the expected prop types
import ambiente1 from '../assets/ambiente1.jpg'; // Adjusted import to match the expected prop types
import pratoDecorado from '../assets/pratoDecorado.jpg'; // Adjusted import to match the expected prop types
import detalheMesa from '../assets/detalheDamesa.jpg';
import evento from '../assets/evento.jpg'; // Adjusted import to match the expected prop types
import equipa from '../assets/equipa.jpg' // Adjusted import to match the expected prop types
import exterior from '../assets/exterior.jpeg'; // Adjusted import to match the expected prop types
import miniGhost from '../assets/mini_ghost.png'; // Placeholder data matching the expected prop types

import ambienteAconchegante from '../assets/ambienteAconchegante.jpg'; // Placeholder data matching the expected prop types
import reserva from "../assets/reserva.jpg" // Placeholder data matching the expected prop types - ADJUSTED WITH IDs AND CATEGORIES/RATINGS
const heroSlides = [
  {
    image: hero1,
    title: 'Descubra o Sabor Autêntico de Luanda',
    subtitle: 'Ingredientes frescos, receitas tradicionais e um ambiente acolhedor esperam por si.',
  },
  {
    image: ambienteAconchegante,
    title: 'Momentos Inesquecíveis à Mesa',
    subtitle: 'Celebre connosco. Perfeito para jantares românticos ou encontros de amigos.',
  },
  {
    image: reserva,
    title: 'Reserve Facilmente a Sua Mesa',
    subtitle: 'Garanta o seu lugar com apenas alguns cliques. Rápido e conveniente.',
  },
];

// Assuming MenuItem requires id and category
const menuItemsData = [
  {
    id: 'moamba',
    category: 'main',
    image: prato1,
    name: 'Moamba de Galinha',
    description: 'Prato tradicional angolano com galinha, quiabo, e óleo de palma.',
    price: 'AOA 5500',
  },
  {
    id: 'mufete',
    category: 'main',
    image: prato2,
    name: 'Mufete Completo',
    description: 'Peixe grelhado servido com feijão de óleo de palma, banana-pão e farofa.',
    price: 'AOA 6500',
  },
  {
    id: 'calulu',
    category: 'main',
    image: prato3,
    name: 'Calulu de Peixe',
    description: 'Guisado rico de peixe seco e fresco com vegetais variados.',
    price: 'AOA 6000',
  },
  {
    id: 'funje',
    category: 'followUp',
    image: prato4,
    name: 'Funje com Molho',
    description: 'Acompanhamento clássico angolano, servido com o seu molho preferido.',
    price: 'AOA 3000',
  },
];

// Assuming GalleryImage requires id and category
const galleryImages = [
  { id: 'gal1', category: 'ambiente', src: ambiente1, alt: 'Ambiente do Restaurante 1' },
  { id: 'gal2', category: 'pratos', src: pratoDecorado, alt: 'Prato Decorado 2' },
  { id: 'gal3', category: 'ambiente', src: detalheMesa, alt: 'Detalhe da Mesa' },
  { id: 'gal4', category: 'equipa', src: equipa, alt: 'Equipa do Restaurante' },
  { id: 'gal5', category: 'ambiente', src: exterior, alt: 'Exterior do Restaurante' },
  { id: 'gal6', category: 'eventos', src: evento, alt: 'Evento Especial' },
];

// Assuming TestimonialProps requires id, rating (instead of stars?), and date
const testimonialsData = [
  {
    id: 'test1',
    image: testimonial1, 
    name: 'Ana Silva',
    rating: 5, // Changed from stars to rating
    date: '2024-05-15',
    text: 'Comida incrível e atendimento impecável! A moamba estava divina. Voltarei sempre!',
  },
  {
    id: 'test2',
    image: testimonial2,
    name: 'Carlos Pereira',
    rating: 4,
    date: '2024-05-10',
    text: 'Ambiente muito agradável e pratos bem servidos. O mufete é espetacular. Recomendo!',
  },
  {
    id: 'test3',
    image: testimonial3,
    name: 'Beatriz Costa',
    rating: 5,
    date: '2024-04-28',
    text: 'Melhor restaurante angolano da cidade! Tudo perfeito, desde a entrada à sobremesa.',
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection slides={heroSlides} />

      <section id="sobre-nos" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nascido da paixão pela culinária autêntica de Angola, o Sabor Luanda traz sabores que contam histórias. Usamos ingredientes frescos e locais, preparados com amor e tradição, para oferecer uma experiência inesquecível a cada visita.
          </p>
          <p className="mt-4 text-sm text-gray-600 italic">*Reconhecido como "Melhor Sabor Tradicional" pela Revista Sabores 2024*</p>
        </div>
      </section>

      <MenuSection menuItems={menuItemsData} />

      <section className="py-12 px-4 bg-primary text-white text-center">
         <h3 className="text-2xl font-semibold mb-2">Reserve Já a Sua Mesa!</h3>
         <p className="mb-4">Lugares limitados, especialmente aos fins de semana. Garanta a sua experiência gastronómica!</p>
         <a href="/contato" className="bg-white text-primary font-bold py-2 px-6 rounded hover:bg-gray-200 transition-colors">
           Faça sua reserva agora
         </a>
      </section>

      <GallerySection images={galleryImages} />

      <TestimonialsSection testimonials={testimonialsData} />

       <section id="cta-final" className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para Saborear Angola?</h2>
        <p className="text-lg text-gray-700 mb-6">Não espere mais! Venha descobrir os autênticos sabores de Luanda ou peça online para desfrutar em casa.</p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/contato" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-dark transition-colors">
            Faça sua reserva agora
          </a>
          <button className="inline-block bg-secondary text-white font-bold py-3 px-8 rounded hover:bg-secondary-dark transition-colors">
            Peça Online (Em Breve)
          </button>
        </div>
      </section>

      <div className="tooltip-container">
        <a href="https://g05th.github.io/portfolio/index.html" className="floating-btn" target="_blank" rel="noopener">
          <img src={miniGhost} alt="logo ghost" className="ghost-icon" />
        </a>
        <span className="tooltip-text">Voltar ao portfólio</span>
      </div>
    </div>
  );
};

export default Home;

