import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Utensils, Coffee, Wine, IceCream, Carrot } from 'lucide-react';
const MenuSection = ({ title, items, activeCategory }) => {
    const filteredItems = activeCategory === 'all'
        ? items
        : items.filter(item => item.category === activeCategory);
    if (filteredItems.length === 0)
        return null;
    return (_jsxs("div", { className: "mb-12", children: [_jsx("h3", { className: "text-2xl font-bold mb-6 text-center", children: title }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredItems.map((item) => (_jsxs("div", { className: "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow", children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover transition-transform duration-500 hover:scale-110" }), item.featured && (_jsx("div", { className: "absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full", children: "Especial" }))] }), _jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsx("h4", { className: "text-lg font-semibold", children: item.name }), _jsx("span", { className: "text-primary font-bold", children: item.price })] }), _jsx("p", { className: "text-gray-600 text-sm", children: item.description })] })] }, item.id))) })] }));
};
const Menu = ({ menuItems }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const categories = [
        { id: 'all', name: 'Todos', icon: _jsx(Utensils, { size: 18 }) },
        { id: 'starters', name: 'Entradas', icon: _jsx(Coffee, { size: 18 }) },
        { id: 'main', name: 'Principais', icon: _jsx(Utensils, { size: 18 }) },
        { id: 'followUp', name: 'Acompanhante', icon: _jsx(Carrot, { size: 18 }) },
        { id: 'desserts', name: 'Sobremesas', icon: _jsx(IceCream, { size: 18 }) },
        { id: 'drinks', name: 'Bebidas', icon: _jsx(Wine, { size: 18 }) },
    ];
    const starters = menuItems.filter(item => item.category === 'starters');
    const mains = menuItems.filter(item => item.category === 'main');
    const followUp = menuItems.filter(item => item.category === 'followUp');
    const desserts = menuItems.filter(item => item.category === 'desserts');
    const drinks = menuItems.filter(item => item.category === 'drinks');
    return (_jsx("section", { id: "menu", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Nosso Card\u00E1pio" }), _jsx("div", { className: "w-24 h-1 bg-primary mx-auto mb-6" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Descubra nossa sele\u00E7\u00E3o de pratos preparados com ingredientes frescos e t\u00E9cnicas culin\u00E1rias refinadas." })] }), _jsx("div", { className: "flex flex-wrap justify-center mb-12", children: _jsx("div", { className: "flex flex-wrap justify-center gap-2 md:gap-4", children: categories.map((category) => (_jsxs("button", { onClick: () => setActiveCategory(category.id), className: `flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeCategory === category.id
                                ? 'bg-primary text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'}`, children: [category.icon, category.name] }, category.id))) }) }), 
                                _jsx(MenuSection, { title: "Entradas", items: starters, activeCategory: activeCategory }), 
                                _jsx(MenuSection, { title: "Pratos Principais", items: mains, activeCategory: activeCategory }),
                                _jsx(MenuSection, { title: "Acompanhante", items: followUp, activeCategory: activeCategory }), 
                                _jsx(MenuSection, { title: "Sobremesas", items: desserts, activeCategory: activeCategory }), 
                                _jsx(MenuSection, { title: "Bebidas", items: drinks, activeCategory: activeCategory }), 
                                _jsx("div", { className: "text-center mt-12", children: 
                                    _jsxs("a", { href: "/menu.pdf", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors", children: [_jsx("span", { children: "Ver card\u00E1pio completo (PDF)" }), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [_jsx("path", { d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }), _jsx("path", { d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" })] })] }) })] }) }));
};
export default Menu;
