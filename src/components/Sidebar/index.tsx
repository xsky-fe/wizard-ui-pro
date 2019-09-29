import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, Icon } from 'wizard-ui';
import './style.scss';

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
          <NavLink to="/" exact activeClassName="Navigation__link--active">
            <Icon type="overview" />
            概览
          </NavLink>
        ),
      },
      {
        title: (
          <NavLink to="/list" exact activeClassName="Navigation__link--active">
            <Icon type="volume" />
            列表
          </NavLink>
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