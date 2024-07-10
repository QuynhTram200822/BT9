/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
      },
      fontSize: {
        xs: ['10px', '15px'],
        sm: ['12px', '18px'],
        base: ['14px', '20px'],
        mid: ['18px', '25px'],
      },
      colors: {
        'light-gray': '#A0AEC0',
        'dark-black': '#151928e0',
        'light-black': '#31386029',
      },
      width: {
        '100': '1600px',
        '80': '730px',
        '70': '300px',
        '60': '261px',
        '55': '245px',
        '50': '227px',
        '35': '370px',
        '30': '150px',
        '20': '90px',
      },
      height: {
        '49': '193px',
        '75': '353px',

      },

      lineHeight: {
        '0': '5px',
      },
    },
  },
  plugins: [],
}

