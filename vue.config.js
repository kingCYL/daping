// const webpack = require('webpack')
// const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: './',
  filenameHashing: true,
  productionSourceMap: false,
  
  configureWebpack: (config) => {
    config.devtool = 'source-map'

    Object.assign(config, {
      plugins: [
        ...config.plugins,
//         add your plugins
      ],
      devServer: {
        // host: 'localhost',
//         port: process.env.PORT || 8080,
//         proxy: {
//           '/CesService': {
//             target: 'http://xxx/CesService',
//             changeOrigin: true,
//             pathRewrite: {
//               '^/CesService': '/',
//             },
//           },
//         },
      },
    })
  },
}
