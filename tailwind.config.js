/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "767px",
      lg: "1100px",
      xl: "1400px",
    },
    extend: {},
  },
  plugins: [],
};
