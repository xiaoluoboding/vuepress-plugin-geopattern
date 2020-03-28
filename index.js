const path = require('path')

module.exports = {
  name: 'geopattern',

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceApp.js')
  ],

  chainWebpack (config, isServer) {
    // to make geopattern work
    if (!isServer) {
      config.node.set('Buffer', false)
    }
  }
}
