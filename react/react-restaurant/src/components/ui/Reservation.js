import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import Button from './Button';
const Reservation = ({ className = '' }) => {
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
    const [formStatus, setFormStatus] = useState({
        type: null,
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
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
    return (_jsx("section", { id: "reservation", className: `py-20 bg-primary/5 ${className}`, children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Fa\u00E7a sua Reserva" }), _jsx("div", { className: "w-24 h-1 bg-primary mx-auto mb-6" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Reserve sua mesa e prepare-se para uma experi\u00EAncia gastron\u00F4mica inesquec\u00EDvel. Recomendamos reservas com anteced\u00EAncia para garantir disponibilidade." })] }), _jsx("div", { className: "max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5", children: [_jsxs("div", { className: "md:col-span-2 bg-primary p-8 text-white flex flex-col justify-center", children: [_jsx("h3", { className: "text-2xl font-bold mb-6", children: "Informa\u00E7\u00F5es de Contacto" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "mt-1", children: _jsx(Calendar, { size: 20 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: "Hor\u00E1rio de Funcionamento" }), _jsx("p", { className: "text-sm opacity-90", children: "Segunda a S\u00E1bado: 12h00 - 23h00" }), _jsx("p", { className: "text-sm opacity-90", children: "Domingo: 12h00 - 22h00" })] })] }), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "mt-1", children: _jsx(Clock, { size: 20 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: "Reservas" }), _jsx("p", { className: "text-sm opacity-90", children: "Recomendamos reservas com pelo menos 2 horas de anteced\u00EAncia" })] })] }), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "mt-1", children: _jsx(Users, { size: 20 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: "Grupos" }), _jsx("p", { className: "text-sm opacity-90", children: "Para grupos acima de 8 pessoas, entre em contacto direto pelo telefone" })] })] }), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "mt-1", children: _jsx(MessageSquare, { size: 20 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: "Contacto" }), _jsx("p", { className: "text-sm opacity-90", children: "+244 923 456 789" }), _jsx("p", { className: "text-sm opacity-90", children: "reservas@saborluanda.ao" })] })] })] })] }), _jsx("div", { className: "md:col-span-3 p-8", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-1", children: "Nome completo*" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1", children: "E-mail*" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-1", children: "Telefone*" }), _jsx("input", { type: "tel", id: "phone", name: "phone", value: formData.phone, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary", required: true })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "date", className: "block text-sm font-medium text-gray-700 mb-1", children: "Data*" }), _jsx("input", { type: "date", id: "date", name: "date", value: formData.date, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "time", className: "block text-sm font-medium text-gray-700 mb-1", children: "Hora*" }), _jsx("input", { type: "time", id: "time", name: "time", value: formData.time, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "guests", className: "block text-sm font-medium text-gray-700 mb-1", children: "Pessoas*" }), _jsxs("select", { id: "guests", name: "guests", value: formData.guests, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary", required: true, children: [_jsx("option", { value: "", children: "Selecione" }), _jsx("option", { value: "1", children: "1 pessoa" }), _jsx("option", { value: "2", children: "2 pessoas" }), _jsx("option", { value: "3", children: "3 pessoas" }), _jsx("option", { value: "4", children: "4 pessoas" }), _jsx("option", { value: "5", children: "5 pessoas" }), _jsx("option", { value: "6", children: "6 pessoas" }), _jsx("option", { value: "7", children: "7 pessoas" }), _jsx("option", { value: "8", children: "8 pessoas" })] })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "occasion", className: "block text-sm font-medium text-gray-700 mb-1", children: "Ocasi\u00E3o (opcional)" }), _jsxs("select", { id: "occasion", name: "occasion", value: formData.occasion, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary", children: [_jsx("option", { value: "", children: "Selecione" }), _jsx("option", { value: "aniversario", children: "Anivers\u00E1rio" }), _jsx("option", { value: "negocios", children: "Reuni\u00E3o de Neg\u00F3cios" }), _jsx("option", { value: "romantico", children: "Jantar Rom\u00E2ntico" }), _jsx("option", { value: "outro", children: "Outro" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-1", children: "Observa\u00E7\u00F5es (opcional)" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, rows: 3, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "Alergias, prefer\u00EAncias, pedidos especiais..." })] }), _jsx("div", { className: "pt-2", children: _jsx(Button, { type: "submit", variant: "primary", className: "w-full", children: "Confirmar Reserva" }) }), formStatus.type && (_jsx("div", { className: `mt-4 p-3 rounded-md ${formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`, children: formStatus.message }))] }) })] }) })] }) }));
};
export default Reservation;
