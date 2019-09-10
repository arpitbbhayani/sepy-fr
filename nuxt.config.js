export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Sepy Console',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/static/img/logo/icon.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/static/static/css/semantic.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/semantic-ui',
    { src: '~/plugins/nuxt-client-init.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:4000'
  },

  generate: {
    fallback: true
  }
}
