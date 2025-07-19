import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { X } from 'lucide-react';
const Gallery = ({ images }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const categories = [
        { id: 'all', name: 'Todos' },
        { id: 'ambiente', name: 'Ambiente' },
        { id: 'pratos', name: 'Pratos' },
        { id: 'eventos', name: 'Eventos' },
    ];
    const filteredImages = activeCategory === 'all'
        ? images
        : images.filter(image => image.category === activeCategory);
    const openModal = (image) => {
        setCurrentImage(image);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };
    const nextImage = () => {
        if (!currentImage)
            return;
        const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setCurrentImage(filteredImages[nextIndex]);
    };
    const prevImage = () => {
        if (!currentImage)
            return;
        const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setCurrentImage(filteredImages[prevIndex]);
    };
    return (_jsxs("section", { id: "gallery", className: "py-20", children: [_jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Nossa Galeria" }), _jsx("div", { className: "w-24 h-1 bg-primary mx-auto mb-6" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Conhe\u00E7a nosso ambiente, pratos e eventos atrav\u00E9s das imagens." })] }), _jsx("div", { className: "flex flex-wrap justify-center mb-8", children: _jsx("div", { className: "flex flex-wrap justify-center gap-2 md:gap-4", children: categories.map((category) => (_jsx("button", { onClick: () => setActiveCategory(category.id), className: `px-4 py-2 rounded-full transition-all ${activeCategory === category.id
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: category.name }, category.id))) }) }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: filteredImages.map((image) => (_jsxs("div", { className: "relative overflow-hidden rounded-lg shadow-md cursor-pointer group", onClick: () => openModal(image), children: [_jsx("img", { src: image.src, alt: image.alt, className: "w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: _jsx("div", { className: "text-white text-center p-4", children: _jsx("p", { className: "font-medium", children: image.alt }) }) })] }, image.id))) }), filteredImages.length === 0 && (_jsx("div", { className: "text-center py-12 text-gray-500", children: "Nenhuma imagem encontrada nesta categoria." })), _jsx("div", { className: "text-center mt-12", children: _jsxs("a", { href: "https://instagram.com/saborluanda", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors", children: [_jsx("span", { children: "Ver mais no Instagram" }), _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: _jsx("path", { d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" }) })] }) })] }), modalOpen && currentImage && (_jsx("div", { className: "fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4", children: _jsxs("div", { className: "relative max-w-4xl w-full", children: [_jsx("button", { onClick: closeModal, className: "absolute top-4 right-4 text-white hover:text-gray-300 transition-colors", "aria-label": "Fechar", children: _jsx(X, { size: 24 }) }), _jsx("img", { src: currentImage.src, alt: currentImage.alt, className: "w-full max-h-[80vh] object-contain" }), _jsxs("div", { className: "absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4", children: [_jsx("button", { onClick: prevImage, className: "bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all", "aria-label": "Imagem anterior", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), _jsx("button", { onClick: nextImage, className: "bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all", "aria-label": "Pr\u00F3xima imagem", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })] }), _jsx("div", { className: "text-white text-center mt-4", children: _jsx("p", { className: "text-lg", children: currentImage.alt }) })] }) }))] }));
};
export default Gallery;
