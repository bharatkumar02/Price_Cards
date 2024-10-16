/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat' : ["Montserrat", "sans-serif"],
      },

      backgroundImage : {
        'bgBottom' : '/src/assets/bg-bottom.svg',
        'bgTop' : '/src/assets/bg-top.svg',
      }
    },
  },
  plugins: [],
}

