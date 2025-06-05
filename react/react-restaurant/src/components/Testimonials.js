import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star, StarHalf } from 'lucide-react';
const Testimonials = ({ testimonials }) => {
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) {
            stars.push(_jsx(Star, { size: 18, className: "fill-yellow-400 text-yellow-400" }, `full-${i}`));
        }
        if (hasHalfStar) {
            stars.push(_jsx(StarHalf, { size: 18, className: "fill-yellow-400 text-yellow-400" }, "half"));
        }
        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(_jsx(Star, { size: 18, className: "text-gray-300" }, `empty-${i}`));
        }
        return stars;
    };
    return (_jsx("section", { id: "testimonials", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "O Que Dizem Sobre N\u00F3s" }), _jsx("div", { className: "w-24 h-1 bg-primary mx-auto mb-6" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Veja o que nossos clientes t\u00EAm a dizer sobre sua experi\u00EAncia no Sabor Luanda." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((testimonial) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-12 h-12 rounded-full object-cover mr-4" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: testimonial.name }), _jsx("div", { className: "flex items-center mt-1", children: renderStars(testimonial.rating) })] })] }), _jsxs("p", { className: "text-gray-600 italic mb-3", children: ["\"", testimonial.text, "\""] }), _jsx("p", { className: "text-gray-400 text-sm", children: testimonial.date })] }, testimonial.id))) }), _jsx("div", { className: "text-center mt-12", children: _jsxs("a", { href: "https://g.page/r/saborluanda/review", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-full transition-colors", children: [_jsx("span", { children: "Deixe sua avalia\u00E7\u00E3o" }), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [_jsx("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), _jsx("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })] })] }) })] }) }));
};
export default Testimonials;
