/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);

module.hot && module.hot.accept();