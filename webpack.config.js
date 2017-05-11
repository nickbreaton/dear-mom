const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  return {
    devtool: env.dev ? 'source-map' : undefined,
    entry: [
      resolve(__dirname, 'src/styles/index.scss'),
      resolve(__dirname, 'src/scripts/index.js')
    ],
    output: {
      filename: 'index.js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.json$/, use: 'json-loader' },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'public' }
      ]),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        minify: {
          collapseWhitespace: env.prod,
          removeComments: env.prod
        },
        template: 'src/index.html'
      })
    ]
  }
}
