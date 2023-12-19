// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    // Update the content option to include your source files
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./public/index.html",
  ],
}