
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Overview from '../../Layout/Overview';
import BasicList from '../../Layout/List/Basic';
import BasicDetail from '../../Layout/Detail/Basic';
import Login from '../../pages/Login';
import './style.scss';
import { getCookie } from '../../utils/cookie';

const PrivateRoute = ({ children, ...rest }: any) => (
  <Route
    {...rest}
    render={() => {
      const datas = getCookie();
      const existCache = Object.keys(datas).length > 0;
      if (existCache && rest.path === '/login') {
        return <Redirect to="/" />;
      } else if (!existCache && rest.path !== '/login') {
        return <Redirect to="/login" />;
      } else {
        return children;
      }
    }}
  />
);

const ROUTE_MAP = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    component: () => <Overview />
  },
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: () => <Login />
  },
  {
    path: '/list-basic',
    name: 'Basic List',
    component: () => <BasicList/>
  },
  {
    path: '/detail-basic',
    name: 'Basic Detail',
    component: () => <div className="DetailPage"><BasicDetail /></div>
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
      <PrivateRoute exact={r.exact} key={r.path} path={r.path}>
        {r.component()}
      </PrivateRoute>
    ))}
  </div>
)