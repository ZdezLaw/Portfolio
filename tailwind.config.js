/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        publiflor: ["PubliFluorNormale", "system-ui", "sans-serif"],
      },
      colors: {
        darkbg: "#111111",
        accent: "#D4D43F",
      },
    },
  },
  plugins: [],
};
