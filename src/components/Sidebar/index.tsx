import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navigation } from 'wizard-ui';

const navs = {
  dashboard: {
    title: <Link to="/dashboard">概览</Link>,
    icon: 'overview',
  },
  list: {
    title: <Link to="/list">列表</Link>,
    icon: 'volume',
  }
}

export default () => {
  return (
    <Navigation navGroups={navs} />
  )
}