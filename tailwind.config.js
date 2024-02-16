/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf6e3',
          100: '#fceec7',
          200: '#f9e4a7',
          300: '#f5d87f',
          400: '#f1cd5e',
          500: '#eebe3e',
          600: '#d9a32a',
          700: '#b7811d',
          800: '#936215',
          900: '#7a4c0d',
        },
        golden: {
          one: '#ad950a',
          two: '#d4af37',
          three: '#E5B80B',
        },
      },
      gridTemplateRows: {
        15: 'repeat(15, minmax(0, 1fr))',
      },
      gridRow: {
        'span-15': 'span 15 / span 15',
        'span-8': 'span 8 / span 8',
        'span-7': 'span 7 / span 7',
      },
      fontFamily: {
        Delirium: 'Delirium',
        Super_Squad: 'Super Squad',
        Saira: 'Saira Extra Condensed',
        Satisfy: 'Satisfy',
        Barlow_Condensed: 'Barlow Condensed',
        Outfit: 'Outfit',
        Stencil: 'Big Shoulders Stencil Text',
      },
    },
  },
  plugins: [],
}
