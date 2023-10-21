/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#2E86DE",
        "secondary": "#FF6B6B",
        "background": "#F8F9FA",
        "span": "#333333",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      desktop: "1024px",
    },
  },
  plugins: [],
};

