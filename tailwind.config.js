const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'Inter', ...defaultTheme.fontFamily.sans ],
        'serif': [ 'Architects Daughter', ...defaultTheme.fontFamily.serif ]
      }
    },
  },
  plugins: [],
}
