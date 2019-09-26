## 使用 typescript

1. 添加依赖库;
```bash
yarn add typescript @types/node @types/react @types/react-dom

# webpack loader
yarn add awesome-typescript-loader -D
```

2. 将 react 代码文件后缀从 `.js` 改为 `.tsx`;

3. 初始化 `ts.config` 并调整配置;
```
tsc --init
```

4. 调整 `webpack.config.js` 支持 ts；
```js
{
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'awesome-typescript-loader']
			},
		]
	},
	resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
}
```

5. 修复 hot 热更新类型报错问题；
```bash
yarn add @types/webpack-env -D
```
配置 `src/index.tsx` 文件
```tsx
/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />
...
module.hot && module.hot.accept();
```
