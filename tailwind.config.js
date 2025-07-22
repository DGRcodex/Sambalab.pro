/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F6F3ED', // beige claro (fondo)
          200: '#EBE2D9',
          300: '#D1BFAF',
          400: '#A07A62', // texto claro legible
          500: '#8F6F5B', // texto normal
          600: '#694D3C', // texto base más oscuro
          700: '#4A3429', // texto títulos
          800: '#2E1F19', // encabezados fuertes
          900: '#1A110D', // extremos oscuros
        },
        purple: {
          100: '#FFECE6',
          200: '#FFD5C7',
          300: '#FFB79F',
          400: '#FF8C66',
          500: '#F2542D',
          600: '#D14727',
          700: '#B53B22',
          800: '#8F2D19',
          900: '#671F10',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        'architects-daughter': ['Architects Daughter', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
