
import React from 'react';
import { Route } from 'react-router-dom';

const ROUTE_MAP = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    component: () => <div>dashboard</div>
  },
  {
    path: '/list',
    name: 'List',
    component: () => <div>list</div>
  }
];
export default () => (
  <div>
    {ROUTE_MAP.map(r => (
      <Route exact={r.exact} key={r.path} path={r.path} component={r.component} />
    ))}
  </div>
)