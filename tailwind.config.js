/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        veryBlackPearl: '#05172E',
        blackPearl: '#092F5D',
        lightPearl: '#B9D6F8',
        veryLightPearl: '#F6F9FE',
        lightPersimmon: '#FF6352',
        veryLightPersimmon: '#FA9494',
      },
    },
  },
  plugins: [],
};
