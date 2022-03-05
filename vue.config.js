// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://parallel.meumy.club/',
          changeOrigin: true
        },
        '/pics': {
          target: 'http://parallel.meumy.club/',
          changeOrigin: true
        }
      }
    }
  }