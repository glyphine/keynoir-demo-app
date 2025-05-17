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
        montserrat: ["Montserrat Bold"],
        noto: ["NotoSans Regular"],
        "noto-bold": ["NotoSans Bold"],
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
