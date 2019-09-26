/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot && module.hot.accept();