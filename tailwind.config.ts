import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  content: ['./app.vue', './pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      colors: { charcoal: '#2b2b2b' },
      fontFamily: { sans: ['Montserrat', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
    },
  },
}
