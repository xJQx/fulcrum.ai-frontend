/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          gunmetal: "#193338",
          "persian-green": "#2BA193",
          sunglow: "#FFC940",
          "sandy-brown": "#F4A261",
          "burnt-sienna": "#E76F51",
        },
        hyperlink: {
          blue: "#0000EE",
        },
      },
      fontFamily: {
        "work-sans": ["'Work Sans'", "sans-serif"],
        "source-sans-pro": ["'Source Sans Pro'", "sans-serif"],
      },
      boxShadow: {
        "normal-shadow":
          "0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)",
        "hover-shadow":
          "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
