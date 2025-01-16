/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0.5rem',
        screens: {
          '2xl': '56rem'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

