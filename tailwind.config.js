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
        blue4:'#2E60E1',
        blue5:'#7B68EE',
        blue6:'#3366FF',
        gray:'#575757',
        gray1:'#00000014',
        gray2:'#6D7176',
        gray3:'#222C35',
        gray4:'#637381',
        gray5:'#999999',
        gray6:'#637381',
        gray7:'#919EAB',
        gray8:'#F8F7FE',
        black100:'#222121',
        black200:'#0C131A',
        black300:'#333333',
        black400:'#212B36',
        black500:'#161C24',
        yellow:'#FBAD13',
        yellow100:'#FCBE44',
        liner:'#0A42C6',
        sky:'#F0F9FF',
        sky2:'#EDF5FC',
        sky3:'#F0F5FF',
        sky4:'#D6E4FF',
        sky5:'#F3FCF9',
        sky6:'#F7F9FD',
        sky7:'#6892FF',
        sky8:'#F5F8FF',
        sky9:'#0FA3F6',
        green:'#2BB083',
        green1:'#00AB55',
        pink:'#FFF8EB',
        pink1:'#FFF5F8',
        pink2:'#FF6895',
        whitebg:'#F9F9F9',
        brown:'#B78103'
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
        '5xl':'0 3px 0 1px #00000014',
        '6xl':'0 24px 48px #919EAB',
        '7xl':'0 8px 12px #919EAB',
        '8xl':'20px 0px 20px -4px #919EAB',
        '9xl':'0 0 4px #000000'
      },
      fontFamily: {
        lato: ['Lato','sans-serif'],
        inter:['Inter','sans-serif'],
        poppins:['Poppins','sans-serif'],
        publicSans:['Public Sans', 'sans-serif']
      },
      backgroundImage: {
        'linear-primary':'linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)',
        'image-bg':"url(./../assets/images/join-right.png)",
        'banner-bg':"url(./../assets/images/webp/x-currency-banner.webp)",
        'border-img':'linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)',
      },
    },
  },
  plugins: [],
}

