const path = require('path')

module.exports = {
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],

  chainWebpack (config, isServer) {
    // to make geopattern work
    if (!isServer) {
      config.node.set('Buffer', false)
    }
  }
}
