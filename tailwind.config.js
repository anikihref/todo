/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': {max: '1024px'},
        'md': {max: '768px'},
        'sm': {max: '640px'}
      }
    },
  },
  plugins: [],
}
