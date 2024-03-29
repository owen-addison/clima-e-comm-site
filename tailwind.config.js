/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        moss: {
          50: '#B9BBB5',
          100: '#C7C9C3',
          200: '#DBDDD6',
          300: '#dbddd6',
          400: '#C5C6C0',
          500: '#AFB0AB',
          600: '#999A95',
          700: '#838480',
          800: '#6D6E6B',
          900: '#575855',
          950: '#414240',
        },
        fontFamily: {
          sans: ['"M PLUS 1"', 'sans-serif'], // Ensure the font name matches exactly
        },
      },
    },
  },
  plugins: [],
};
