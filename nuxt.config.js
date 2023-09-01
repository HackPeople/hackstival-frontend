export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-init',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/bootstrap.js'],

  bootstrapVue: {
    icons: true,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // env:{
  //   AXIOS_BASE_URL: process.env.AXIOS_BASE_URL,  //front 도메인 주소
  //   API_DEV:process.env.API_DEV,  // backend 도메인 주소
  //   API_DEV_CDN:process.env.API_DEV_CDN, // aws s3 cdn 주소
  // },
  axios: {
    proxy:false,
    baseURL: 'http://3.36.117.65:8080',
    proxyHeaders: false,
    credentials: false
  },
  // proxy: {
  //   '/api/': {
  //     target: 'http://43.202.0.230:8080/',
  //     pathRewrite: { '^/api': '' },
  //     changeOrigin: true
  //   },
  //   // '/cdn/': {
  //   //   target: process.env.API_DEV_CDN,
  //   //   pathRewrite: { '^/cdn': '' },
  //   //   changeOrigin: true
  //   // }
  // },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}