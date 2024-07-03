/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,astro}",
    "./components/**/*.{ts,tsx,astro}",
    "./app/**/*.{ts,tsx,astro}",
    "./src/**/*.{ts,tsx,astro}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
