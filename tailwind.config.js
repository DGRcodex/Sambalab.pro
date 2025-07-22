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
          200: '#EDE6DE',
          300: '#DCD1C4',
          400: '#C8B8A8',
          500: '#A18F80',
          600: '#7C6A5C',
          700: '#5B483D',
          800: '#3B2F28',
          900: '#241B16',
        },
        purple: {
          100: '#FFECE6', // tonos claros de naranja
          200: '#FFD5C7',
          300: '#FFB79F',
          400: '#FF8C66',
          500: '#F2542D', // Naranjo Sambalab (el principal)
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
