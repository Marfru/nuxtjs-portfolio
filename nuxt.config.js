const development = process.env.NODE_ENV !== 'production'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.TITLE_PORTFOLIO || '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.TITLE_PORTFOLIO || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/component-cache',
    'nuxt-compress',
    'nuxt-purgecss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-57049848-1',
      },
    ],
  ],

  '@nuxtjs/component-cache': {
    maxAge: 1000 * 60 * 60,
  },

  'nuxt-compress': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },

  axios: {
    proxy: true,
    baseURL: development
      ? 'http://localhost:3000/api'
      : 'https://marfru.com/api',
  },

  proxy: {
    '/api': {
      target: 'https://marfru.com',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]',
    },
  },
}
