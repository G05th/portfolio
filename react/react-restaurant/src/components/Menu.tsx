import React, { useState } from 'react';
import { Utensils, Coffee, Wine, IceCream, Carrot } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured?: boolean;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  activeCategory: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, activeCategory }) => {
  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  if (filteredItems.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {item.featured && (
                <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  Especial
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-primary font-bold">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface MenuProps {
  menuItems: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  const [activeCategory, setActiveCategory] = useState('all');

//followUp

  const categories = [
    { id: 'all', name: 'Todos', icon: <Utensils size={18} /> },
    { id: 'starters', name: 'Entradas', icon: <Coffee size={18} /> },
    { id: 'main', name: 'Principais', icon: <Utensils size={18} /> },
    { id: 'followUp', name: 'Acompanhamentos', icon: <Carrot size={18} /> },
    { id: 'desserts', name: 'Sobremesas', icon: <IceCream size={18} /> },
    { id: 'drinks', name: 'Bebidas', icon: <Wine size={18} /> },
  ];

  const starters = menuItems.filter(item => item.category === 'starters');
  const mains = menuItems.filter(item => item.category === 'main');
  const desserts = menuItems.filter(item => item.category === 'desserts');
  const drinks = menuItems.filter(item => item.category === 'drinks');
  const followUp = menuItems.filter(item => item.category === 'followUp');

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Cardápio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção de pratos preparados com ingredientes frescos e técnicas culinárias refinadas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <MenuSection title="Entradas" items={starters} activeCategory={activeCategory} />
        <MenuSection title="Pratos Principais" items={mains} activeCategory={activeCategory} />
        <MenuSection title="Acompanhamento" items={followUp} activeCategory={activeCategory} />
        <MenuSection title="Sobremesas" items={desserts} activeCategory={activeCategory} />
        <MenuSection title="Bebidas" items={drinks} activeCategory={activeCategory} />

        <div className="text-center mt-12">
          <a 
            href="/menu.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <span>Ver cardápio completo (PDF)</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
