/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
  content: [
    './**/*.{html,js}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'logo-color': ' #e4db00',
        'yellow-second': ' #fffb98',
        'yellow-light': ' #fffee9',
        'bg-white': ' #fffffc',
        'dark-logo': ' #2b292c',
        'dark-text': ' #4d4d4d',
        'grey-light': ' #a0a0a0',
        dark: '#161616',
      },
      fontFamily: {
        mulish: 'Mulish, sans-serif',
        poppins: 'Poppins, sans-serif',
      },
      screens: {
        sm: '640px',
        'lg-md': '992px',
        'full-hd': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          'full-hd': '5rem',
        },
      },
      boxShadow: {
        'card-shadow':
          '#b1b1b14d 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
      },
    },
  },
};
