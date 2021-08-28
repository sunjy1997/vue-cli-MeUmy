// vue.config.js
module.exports = {
  proxy: {
    '/pics': {
      target: 'http://parallel.meumy.club/',
      changeOrigin: true
    }
  }
}