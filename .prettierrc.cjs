/** @type {import("prettier").Config} */

module.exports = {
  tailwindConfig: "./tailwind.config.cjs",
  plugins: [
    "./node_modules/prettier-plugin-astro",
    "./node_modules/prettier-plugin-organize-imports",
    "./node_modules/prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: false,
  astroAllowShorthand: false,
  printWidth: 80,
};
