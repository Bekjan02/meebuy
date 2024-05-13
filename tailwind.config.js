/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".break-word": {
          "word-break": "break-word", // This line is typically incorrect for standard CSS, should be `overflow-wrap`
        },
      };
      addUtilities(newUtilities);
    }),
  ],
  content: [
    "./**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color": " #e4db00",
        "yellow-second": " #fffb98",
        "yellow-light": " #fffee9",
        "bg-white": " #fffffc",
        "dark-logo": " #2b292c",
        "dark-text": " #4d4d4d",
        "grey-light": " #a0a0a0",
        dark: "#161616",
      },
      fontFamily: {
        mulish: "Mulish, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      screens: {
        sm: "640px",
        "lg-md": "992px",
        "2xl": "1440px",
      },
      gridTemplateColumns: {
        offers: "repeat(4,minmax(278px, 1fr))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          "2xl": 0,
        },
        screens: {
          "2xl": "1200px", // Здесь ширина будет 1200px начиная с 1440px
        },
      },
      boxShadow: {
        "card-shadow":
          "#b1b1b14d 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        "category-black": "0px 0px 8px 0px #E4DB00CC",
        "category-white": "0px 0px 10px 0px #B1B1B180",
      },
      wordBreak: {
        "break-word": "break-word", // This is not standard CSS for word-break, which typically uses 'break-all'
      },
    },
  },
};
