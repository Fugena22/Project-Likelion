/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    colors: {
      primary: "#FF7710",
      secondary: "#1C1B1A",
      gray: "#D9D9D9",
      white: "#FFFFFF",
    },
    fontFamily: {
      body: "Montserrat",
      text: "Open Sans",
    },
  },
  plugins: [],
};
