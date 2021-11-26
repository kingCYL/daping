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
  
   function sum(lastPrice = 1, NowPrice = 1, cost, n = 1) {
        let lastAveragePrice = cost / n

        // 跌幅0.4
        if (NowPrice <= 0.6 * lastPrice) {
          lastPrice = NowPrice
          cost = cost * 2
          n = cost / NowPrice
        }

        let nowAveragePrice = cost / n
        let isTarget = nowAveragePrice - lastAveragePrice === 3 ? true : false

        return {
          lastPrice,
          NowPrice,
          n,
          isTarget,
          cost,
        }
      }

      function buy() {
        let { lastPrice, NowPrice, n, isTarget, cost } = this.sum(1, 1, 10, 1)

        while (!isTarget) {
          buy(lastPrice, NowPrice, cost, n)
        }

        console.log('n---', n)
      }

      this.buy()
}
