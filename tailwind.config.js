/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        'light' : '#fefcfb',
        'dark': '#7a7a7a',
        'bg' : '#171717',
        'bg2' : '#1a1a1a',
      },
      fontFamily: {
        nblack: ['nacelleblack'],
        nbold: ['nacellebold'],
        heavy: ['nacelleheavy'],
        nlight: ['nacellelight'],
        nregular: ['nacelleregular'],
        nsemibold: ['nacellesemibold'],
        nthin: ['nacellethin'],
        nultralight: ['nacelleultralight'],
        mattone : ['mattoneregular']
      }
    },
  },
  plugins: [],
}
