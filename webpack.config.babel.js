import path from 'path'
import webpack from 'webpack'
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  entry: {
    app: './src/client/index.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'   
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
}

export default config
