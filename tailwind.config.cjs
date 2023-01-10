/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: { 0.5: "0.5px" },
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1440px",
    },
    colors: {
      primary: "#FF7710",
      secondary: "#1C1B1A",
      gray: "#D9D9D9",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      body: "Montserrat",
      text: "Open Sans",
    },
  },
  plugins: [],
};
