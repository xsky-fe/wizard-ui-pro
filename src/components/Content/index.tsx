
import React from 'react';
import { Route } from 'react-router-dom';

const ROUTE_MAP = [
  {
    path: '/dashboard',
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
      <Route exact={r.path === '/dashboard/'} key={r.path} path={r.path} component={r.component} />
    ))}
  </div>
)