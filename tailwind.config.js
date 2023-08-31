/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    
    ],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: { 
        sans: 'Maven Pro, sans-serif'
      }
    },
  },
  plugins: [],
}
