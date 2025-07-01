/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          'custom-dark-blue': '#090f37',
          'custom-light-blue': '#dfe7fe',
          'custom-medium-blue': '#4B2ED8'
        },
      },
    },
  },
  plugins: [
  ],
}
