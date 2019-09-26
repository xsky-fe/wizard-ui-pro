import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navigation, Icon } from 'wizard-ui';

const navs = {
  dashboard: {
    title: '概览',
    icon: 'overview',
  },
  list: {
    title: '导航栏一',
    children: [
      {
        title: (
          <Link to="/">
            <Icon type="overview" />
            概览
          </Link>
        ),
      },
      {
        title: (
          <Link to="/list">
            <Icon type="volume" />
            列表
          </Link>
        ),
      }
    ]
  }
}

type Props = {
  toggle: boolean
}

export default (props: Props) => {
  return (
    <Navigation navGroups={navs} toggled={props.toggle}/>
  )
}