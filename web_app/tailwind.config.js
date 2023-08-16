/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'logo': ['Zeyada', 'cursive']
    },
    extend: {
      colors: {
        'primary': '#bf8e24',
        'white': '#ffffff',
        'secondary': '#402c02'
      },
    },
  },
  plugins: [],
}

