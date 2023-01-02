/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend:{
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
}
