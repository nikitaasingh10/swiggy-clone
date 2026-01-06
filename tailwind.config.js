/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'swiggy-orange': '#ff5200',
        'swiggy-dark': '#282c3f',
      }
    },
  },
  plugins: [],
}