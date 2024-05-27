/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Noto Sans", "sans-serif"],
        logo: ["Orelega One"],
      },
      colors: {
        primary: {
          DEFAULT: "#E6C077",
          500: "#E6C077",
          700: "#ba995b",
        },
        secondary: "#A58268",
        thirdy: "#C0A79A",
        background: "#F4F9FC",
        valid: "#BFFFAF",
        text: "#1B1A19",
        secondaryText: "#6f6c6c",
      },
      gridTemplateRows: {
        layout: "min-content minmax(90%, auto) min-content",
      },
    },
  },
  plugins: [],
};
