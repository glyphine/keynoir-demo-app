/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-bold": ["Montserrat-Bold"],
        "notosans-regular": ["NotoSans-Regular"],
        "notosans-bold": ["NotoSans-Bold"],
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
