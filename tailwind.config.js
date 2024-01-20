/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'sm': '550px',
      }
    },
  },
  plugins: [],
}

