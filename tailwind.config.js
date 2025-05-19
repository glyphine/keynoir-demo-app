/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
       background: "#000000",
       backgroundtwo: "#FFEBE7",
       primary: "#FF82A9",
       secondary: "#7F95D1",
       lightpink: "#FFC0BE",
      },
      
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
