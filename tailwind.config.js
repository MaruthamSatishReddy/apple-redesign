/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Trebuchet MS', 'Trebuchet MS'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('daisyui')],
};
