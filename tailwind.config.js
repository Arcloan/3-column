/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ['"Lexend Deca', "sans"],
        Big: ['"Big Shoulders Display', "sans"] 
      },
      colors: {
        orange: 'hsl(31, 77%, 52%)',
        dark_cyan: 'hsl(184, 100%, 22%)',
        very_dark_cyan: 'hsl(179, 100%, 13%)',
        transparent_white: 'hsla(0, 0%, 100%, 0.75)',
        very_light_gray: 'hsl(0, 0%, 95%)',
      }
    },
  },
  plugins: [],
}

