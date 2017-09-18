module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'etherstellar.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Etherstellar.io website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js', 'data-apikey': '7baf6f286493a4a38826c4727ba422f1' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3ecf8e' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios']
  },
  css: [
    { src: '~/assets/style/app.styl', lang: 'styl' }
  ]
}
