/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
        raleway: ['"Raleway"'],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
