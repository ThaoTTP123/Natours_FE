/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: {
        50: '#f2fbf5',
        100: '#e1f7e7',
        200: '#c4eed2',
        300: '#95e0ad',
        400: '#55c57a',
        500: '#3aad60',
        600: '#2a8f4c',
        700: '#24713e',
        800: '#215a35',
        900: '#1d4a2d',
        950: '#0b2816',
        DEFAULT: '#55c57a',
      },
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
  },
  plugins: [],
};
