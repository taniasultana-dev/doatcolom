/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary:'#000000',
        blue:'#517DFC',
        blue1:'#0583D2',
        blue2:'#0082FF',
        blue3:'#324F6C',
        gray:'#575757',
        gray1:'#00000014',
        gray2:'#6D7176',
        gray3:'#222C35',
        black100:'#222121',
        yellow:'#FBAD13',
        yellow100:'#FCBE44',
        liner:'#0A42C6',
        sky:'#F0F9FF',
        sky2:'#EDF5FC',
        pink:'#FFF8EB',
        black200:'#0C131A',
        whitebg:'#F9F9F9',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens:{
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      boxShadow: {
        '3xl': '8px 24px 40px 8px #00000014',
        '4xl':'0px 1px 0px 0px #092E97',
      },
      fontFamily: {
        lato: ['Lato','sans-serif'],
        inter:['Inter','sans-serif']
      },
      backgroundImage: {
        'linear-primary':'linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)',
        'image-bg':"url(./../assets/images/join-right.png)",
      },
    },
  },
  plugins: [],
}

