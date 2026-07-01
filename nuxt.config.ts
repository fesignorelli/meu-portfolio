export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['~/assets/css/tailwind.css'],

  imports: {
    dirs: ['composables'],
  },

  app: {
    head: {
      title: 'Fernanda Signorelli — Portfolio',
      meta: [
        {
          name: 'description',
          content: 'Portfolio de Fernanda Signorelli — Web Designer e Front-end Developer.',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,700;0,900;1,700&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,800&display=swap',
        },
      ],
    },
  },
})
