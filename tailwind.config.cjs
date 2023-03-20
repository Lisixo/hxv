/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom': {
          DEFAULT: '#1E2124',
          50: '#838D98',
          100: '#7C8792',
          200: '#6F7A85',
          300: '#646E77',
          400: '#58616A',
          500: '#4C545C',
          600: '#41474E',
          700: '#353A40',
          800: '#2A2E32',
          900: '#1E2124'
        },
      },
    },
  },
  plugins: [],
};
