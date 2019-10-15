const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
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
    publicPath: './',
    pathinfo: false,
    filename: '[name].[hash].js',
    filename: '[name].[hash].chunk.js',
  },
  devtool: 'source-map',
  plugins: [
    new MomentLocalesPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru'],
    }),
    new OptimizeCSSAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
      ignoreOrder: false,
    }),
  ],
});