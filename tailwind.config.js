/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./page/**/*.{js,ts,jsx,tsx}"
  ],
  extend: {
    utilities: {
      'rowJC': {
        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'nowrap',
        'justify-content': 'center',
        'align-items': 'center',
      },
    },
  },
  theme: {
    extend: {

    },
  },
  plugins: [],

};
