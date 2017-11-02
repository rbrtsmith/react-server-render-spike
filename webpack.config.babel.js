import path from 'path'

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

export default config
