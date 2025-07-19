/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c91a1a', // Cor principal
        'primary-dark': '#a01414', // Variação escura
        'primary-light': '#e74c3c', // Variação clara
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
