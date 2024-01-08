/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        BebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
