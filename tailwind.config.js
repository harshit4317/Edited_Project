/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '200px'
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Open Sans', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}