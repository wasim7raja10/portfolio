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
      padding: "1rem",
      screens: {
        xl: "820px",
      },
    },
  },
  daisyui: {
    themes: ["lofi"],
  },
  plugins: [require("daisyui")],
};
