/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}