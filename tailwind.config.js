/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'bg': {'min': '1800px'},
      // => @media (min-width: 1800px) { ... }

      'bgs': {'min': '1500px'},
      // => @media (min-width: 1800px) { ... }

      'bm': {'min': '1440px'},
      // => @media (min-width: 1440px) { ... }

      'bms': {'max': '1500px'},
      // => @media (max-width: 1440px) { ... }

      'bmss': {'min': '1430px'},
      // => @media (max-width: 1440px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1090px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '875px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}