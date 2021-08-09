export default {
  ssr: false,
  static: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Scorp Case Study',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This website is case study for front end position.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/ico.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css', '~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  /* TODO get locale's content from strapi then export */
  i18n: {
    locales: [
      { code: 'en', iso: 'en', file: 'en.js' },
      { code: 'tr', iso: 'tr', file: 'tr.js' },
    ],
    defaultLocale: 'en',
    langDir: '~/locales',
    vueI18n: {
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: '',
      redirectOn: 'no prefix',
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      cookieSecure: false,
    },
  },
  /* TODO add theme configuration */
  /* TODO remove vuetify breakpoints for clearence */
  vuetify: {
    customVariables: ['~/assets/css/customize-vuetify.scss'],
    treeShake: true,
    theme: { disable: true },
  },
  router: {
    middleware: [
      'mobile',
    ] /* TODO use nuxt.$device module instead. but it dosn't support change layout onResize with static sites, too. */,
  },
}
