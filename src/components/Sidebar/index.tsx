import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, Icon } from 'wizard-ui';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { getLocale } from '../../utils/locale';
import './style.scss';

type LinkTitleType = {
  path: string,
  icon: string,
  id: string
}

type Props = {
  toggle: boolean
}

const navs = {
  dashboard: {
    title: <span><FormattedMessage id="app.sidebar.overview" /></span>,
    icon: 'overview',
    component: (props: any) => <NavLink to="/" exact activeClassName="Navigation__link--active" {...props} />
  },
  list: {
    title: <FormattedMessage id="app.sidebar.list" />,
    children: [
      {
        title: <FormattedMessage id="app.sidebar.list.basic" />,
        icon: 'list',
        component: (props: any) => <NavLink to="/list-basic" exact activeClassName="Navigation__link--active" {...props} />
      }
    ]
  },
  detail: {
    title: <FormattedMessage id="app.sidebar.detail" />,
    children: [
      {
        title: <FormattedMessage id="app.sidebar.detail.basic" />,
        icon: 'standard-dn',
        component: (props: any) => <NavLink to="/detail-basic" exact activeClassName="Navigation__link--active" {...props} />
      }
    ]
  },
  form: {
    title: <FormattedMessage id="app.sidebar.form" />,
    children: [
      {
        title: <FormattedMessage id="app.sidebar.form.basic" />,
        icon: 'edit-square',
        component: (props: any) => <NavLink to="/form-basic" exact activeClassName="Navigation__link--active" {...props} />
      },
      {
        title: <FormattedMessage id="app.sidebar.form.step" />,
        icon: 'history-2',
        component: (props: any) => <NavLink to="/form-step" exact activeClassName="Navigation__link--active" {...props} />
      }
    ]
  }
}

export default (props: Props) => {
  const locale = getLocale();
  return (
    <Navigation navGroups={navs} toggled={props.toggle} logo={<div className="SideBar__logo">Logo</div>}/>
  )
}