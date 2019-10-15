const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
        sideEffects: true,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            options: {
              precision: 8
            },
            loader: 'sass-loader'
          }
        ],
        sideEffects: true,
      },
    ]
  },
  output: {
    path: __dirname + '/dist',
    pathinfo: true,
    filename: 'bundle.js',
    chunkFilename: 'bundle.chunk.js',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
});