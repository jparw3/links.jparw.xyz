const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        SFRounded: ['SFRounded', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        lightblue: '#E9F2FE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
