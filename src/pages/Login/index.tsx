import React from 'react';
import LoginForm from '../../forms/Login';
import { FormattedMessage } from 'react-intl';
import './style.scss';

export default () => {
  return (
    <div className="LoginPage">
      <div className="Login">
        <header><FormattedMessage id="app.login" /></header>
        <div className="Login__main">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}