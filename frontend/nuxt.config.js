require('dotenv').config()

export default {
  mode: 'universal',
  env: {
    GOOGLE_MAP: process.env.GOOGLE_MAP
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + '길잡이',
    title: '길잡이' || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'keywords',
        content: '취업 취업정보 채용 회사거리'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'author',
        content: 'NoNameD'
      },
      {
        property: 'og:site_name',
        content: `길잡이`
      },
      {
        property: 'og:title',
        content: '길잡이'
      },
      {
        property: 'og:image',
        content: '/og-image.png'
      },
      {
        property: 'og:site_name',
        content: '길잡이'
      },
      {
        property: 'og:description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons+Round'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding|Noto+Sans+KR|Yeon+Sung&display=swap'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-1.12.4.min.js',
        type: 'text/javascript'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: ['assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/google-maps',
      ssr: true
    },
    {
      src: '~/plugins/directives',
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-vuex-localstorage',
      {
        mode: 'debug',
        localStorage: ['localStorage']
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/^vue2-google-maps($|\/)/],
    extend(config, ctx) {}
  }
}
