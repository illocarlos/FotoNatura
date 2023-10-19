/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {

  },
  theme: {
    extend: {

      fontFamily: {
        neon: ['neon'],
      },
      screens: {
        'mb': '350px',
      },

    },
  },
  plugins: [],

};
