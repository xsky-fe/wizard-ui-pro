import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, Icon } from 'wizard-ui';
import { FormattedMessage } from 'react-intl';
import './style.scss';

const navs = {
  dashboard: {
    title: <FormattedMessage id="app.sidebar.overview" />,
    icon: 'overview',
  },
  list: {
    title: <FormattedMessage id="app.sidebar.nav1" />,
    children: [
      {
        title: (
          <NavLink to="/" exact activeClassName="Navigation__link--active">
            <Icon type="overview" />
            <FormattedMessage id="app.sidebar.basic" />
          </NavLink>
        ),
      },
      {
        title: (
          <NavLink to="/list" exact activeClassName="Navigation__link--active">
            <Icon type="volume" />
            <FormattedMessage id="app.sidebar.list" />
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