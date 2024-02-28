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
        'primary-50': 'rgb(var(--primary-50))',
        'primary-100': 'rgb(var(--primary-100))',
        'primary-200': 'rgb(var(--primary-200))',
        'primary-300': 'rgb(var(--primary-300))',
        'primary-400': 'rgb(var(--primary-400))',
        'primary-500': 'rgb(var(--primary-500))',
        'primary-600': 'rgb(var(--primary-600))',
        'primary-700': 'rgb(var(--primary-700))',
        'primary-800': 'rgb(var(--primary-800))',
        'primary-900': 'rgb(var(--primary-900))',
        'primary-950': 'rgb(var(--primary-950))',
        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))',
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
  plugins: [require('daisyui')],
}
