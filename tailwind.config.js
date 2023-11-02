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
        gray1:'#00000014',
        blue1:'#0583D2',
        yellow:'#FBAD13',
      },
      screens:{
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      boxShadow: {
        '3xl': '8px 24px 40px 8px #00000014',
      },
    fontFamily: {
      lato: ['Lato','sans-serif'],
      inter:['Inter','sans-serif']
    },
    },
  },
  plugins: [],
}

