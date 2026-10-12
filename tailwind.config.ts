import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  content: ['./app.vue', './pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      colors: {
        charcoal: '#2b2b2b',
        pink: {
          DEFAULT: '#f7a0b8',
          light: '#fbb6c4',
          dark: '#F97C9E',
          deep: '#e0527e',
        },
        cream: '#faf5ec',
        peach: '#fae9d7',
      },
      fontFamily: { sans: ['Montserrat', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
    },
  },
}
