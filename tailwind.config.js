/** @type {import('tailwindcss').Config} */
const { colors, backgroudImageConfig } = require("./src/themes/colors.ts")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      backgroundImage: backgroudImageConfig,
    },
    fontFamily: {
      notoJP: ["Noto Sans JP", "sans-serif"],
    },
  },
  plugins: [],
}
