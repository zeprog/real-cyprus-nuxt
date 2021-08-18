
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { href: "https://fonts.googleapis.com/css2?family=Playfair+Display&family=Playfair+Display+SC&family=Roboto:wght@400;700&family=Rye&display=swap", rel: "stylesheet" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '@/node_modules/@fortawesome/fontawesome-free/css/all.min.css', 
    '@/assets/css/style.css'
  ],

  

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'EN',
          file: 'en.json',
        },
        {
          code: 'ru',
          iso: 'ru-RU',
          name: 'RU',
          file: 'ru.json',
        },
        {
          code: 'kz',
          iso: 'kz-KAZ',
          name: 'KZ',
          file: 'kz.json',
        }
      ],
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'ru',
      detectBrowserLanguage: {
        alwaysRedirect: false,
        fallbackLocale: 'en',
        onlyOnRoot: true,
      },
    }],
    ['nuxt-env', {
      keys: [
        'REQUEST_HOST',
        'SOCIAL_REDIRECT_URI',
        'CLIENT_ID_GOOGLE',
        'CLIENT_ID_FB',
        'CLIENT_ID_VK'
      ]
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

  // axios: {
  //   proxy: false
  // },

  // proxy: {
  //   '/RealCyprus/': 'http://localhost:3000/'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
