/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
      },
      colors:{
        customBlue:'#3490dc',
        customBluee:'#4aa2f5',
        black1:'#303031',
        black2:'#191919',
        black3:'#17191a',
        black4:'#111',
        customRed:'#FC4F00'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}