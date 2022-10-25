/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        'light' : '#fefcfb',
        'dark': '#7a7a7a',
        'bg' : '#0d0d0d',
      },
      fontFamily: {
        black: ['nacelleblack'],
        bold: ['nacellebold'],
        heavy: ['nacelleheavy'],
        light: ['nacellelight'],
        regular: ['nacelleregular'],
        semibold: ['nacellesemibold'],
        thin: ['nacellethin'],
        ultralight: ['nacelleultralight']
      }
    },
  },
  plugins: [],
}
