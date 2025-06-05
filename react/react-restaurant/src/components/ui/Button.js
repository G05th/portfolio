import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', disabled = false, icon, }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantStyles = {
        primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
        secondary: 'bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white',
        outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
    };
    const sizeStyles = {
        sm: 'text-sm py-2 px-4',
        md: 'text-base py-3 px-6',
        lg: 'text-lg py-4 px-8',
    };
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    return (_jsxs("button", { type: type, className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`, onClick: onClick, disabled: disabled, children: [icon && _jsx("span", { className: "mr-2", children: icon }), children] }));
};
export default Button;
