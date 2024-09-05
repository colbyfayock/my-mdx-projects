/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'spacejelly-gray-dark': '#001523',
        'brand-blue-medium': '#0A64EC',
        'brand-blue-dark': '#100E4F',
        'brand-purple': '#9162BB',
        'brand-purple-light': '#AD6EE7',
        'brand-gray-light': '#E5E7ED',
        'brand-gray-medium': '#909090',
      },
      width: {
        'content-with-sidebar': 'calc(100% - 20rem)',
        'sidebar': '20rem'
      }
    },
  },
  plugins: [],
}








