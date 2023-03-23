/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'clear-bin': "url('./images/remove-bin.svg')",
        'minimize-button': "url('./images/minimize.svg')",
        'maximize-button': "url('./images/maximize.svg')",
        'pokemon-logo': "url('./images/poke-logo.png')",
        'like-transp': "url('./images/like-transp.svg')",
        'like-red': "url('./images/like-red.svg')",
        'clear-button': "url('./images/clear-button.svg')",
        'compare-unchecked': "url('./images/unchecked-icon.svg')",
        'compare-checked': "url('./images/checked-icon.svg')",
      },
    },
  },
  plugins: [],
};
