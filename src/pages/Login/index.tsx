import React from 'react';
import LoginForm from '../../forms/Login';
import './style.scss';

export default () => {
  return (
    <div className="LoginPage">
      <div className="Login">
        <header>登录</header>
        <div className="Login__main">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}