/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      apricot: "#FED0BB",
      melon: "#FCB9B2",
      bistre: "#251605",
      wine: "#A64D79",
      englishViolet: "#3B1C32",
      darkPurple: "#1A1A1D",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "selector",
};
