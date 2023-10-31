/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary:'000000',
        blue:'#517DFC',
        gray:'#575757',
        black100:'#222121',
      },
      screens:{
        'max-xs': '320px',
        // => @media (min-width: 320px) { ... }
  
      },
    fontFamily: {
      lato: ['Lato','sans-serif'],
      inter:['Inter','sans-serif']
    },
    },
  },
  plugins: [],
}

