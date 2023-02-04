/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        blue: '#6050DC',
        darkPurple: '#2a0378',
        urbanBlue: '#AFDBF5',
        light: '#bbd2ff'
      },
      backgroundImage:{
        cardBg: 'linear-gradient(90deg, rgba(58,0,159,1) 17%, rgba(54,20,208,0.9809173669467787) 100%)'
      },
      screens:{
        'sm-0': '450px'
      },
      fontFamily:{
        montserrat: 'Montserrat',
        poppins: 'Poppins',
        raleway: 'Raleway'
      }
    },
  },
  plugins: [],
}
