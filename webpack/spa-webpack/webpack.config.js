const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new WebpackDeepScopeAnalysisPlugin()
  ]
}
module.exports = webpackConfig