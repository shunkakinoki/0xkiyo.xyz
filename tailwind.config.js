const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["VT323", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
