
import React from 'react';
import { Route } from 'react-router-dom';
import Overview from '../../Layout/Overview';
import './style.scss';

const ROUTE_MAP = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    component: () => <Overview />
  },
  {
    path: '/list',
    name: 'List',
    component: () => <div>list</div>
  },
  {
    path: '/detail-basic',
    name: 'Basic Detail',
    component: () => <div>Basic Detail</div>
  },
  {
    path: '/form-basic',
    name: 'Basic Form',
    component: () => <div>Basic Form</div>
  },
  {
    path: '/form-step',
    name: 'Step Form',
    component: () => <div>Step Form</div>
  },
];
export default () => (
  <div className="Content">
    {ROUTE_MAP.map(r => (
      <Route exact={r.exact} key={r.path} path={r.path} component={r.component} />
    ))}
  </div>
)