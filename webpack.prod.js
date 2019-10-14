const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MomentLocalesPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru'],
    }),
    new TerserPlugin(),
    new OptimizeCSSAssetsPlugin()
  ],
  devtool: 'source-map',
});