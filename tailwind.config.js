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
      gap: {
        "custom-gap": "1rem",
      },
      height: {
        "h-250": "250px",
        "h-499": "499px",
        "h-590": "590px",
      },
      width: {
        "w-250": "250px",
        "w-499": "499px",
      },
      maxWidth: {
        "custom-calc": "calc(100% - 300px)",
      },
      colors: {
        lightPink: "#fcf7f7",
        green: "#05a081",
        red: "#ff0000",
        purpleGrey: "rgba(84,61,104,0.295)",
        darkBlue: "rgb(22,16,56)",
        darkGrey: "#4a4a4a",
        lightGrey: "#dfdfe0",
        darkPurple: "rgba(52,24,63,0.74)",
      },
      boxShadow: {
        customShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
