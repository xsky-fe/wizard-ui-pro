const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
    new LodashModuleReplacementPlugin,
  ],
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true
  }
};
