/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#E6C077",
      secondary: "#A58268",
      background: "#FFFFFF",
      valid: "#BFFFAF",
      text: "#1B1A19",
      secondaryText: "#6f6c6c",
    },
    extend: {
      fontFamily: {
        body: ["Noto Sans", "sans-serif"],
        logo: ["Orelega One"],
      },
    },
  },
  plugins: [],
};
