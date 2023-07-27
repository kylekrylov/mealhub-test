export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mealhub',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'comment',
  //       path: '/comments/comment-:commentId',
  //       component: resolve(__dirname, 'pages/comments/comment-id.vue')
  //     });
  //   }
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
