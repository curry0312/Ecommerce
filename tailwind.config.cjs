/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "shan": "Shantell Sans, cursive",
        "roboto": "Roboto Slab, serif",
      },
      colors:{
        "darkblue": "#131921"
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
