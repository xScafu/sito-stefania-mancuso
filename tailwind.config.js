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
      englishViolet: "#694D75",
      darkPurple: "#37283E",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "selector",
};
