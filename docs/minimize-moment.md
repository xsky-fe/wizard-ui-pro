# 减小 `moment` 库打包后的大小

在 `webpack.config.js` 中补充配置

```js
{
  plugins: [
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
}
```
