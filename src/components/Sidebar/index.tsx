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
const LinkTitle = ({ path, icon, id }: LinkTitleType) => (
  <NavLink to={path} exact activeClassName="Navigation__link--active">
    <Icon type={icon} />
    <FormattedMessage id={`app.sidebar.${id}`} />
  </NavLink>
)

const navs = {
  dashboard: {
    title: <LinkTitle path="/" icon="overview" id="overview" />,
  },
  list: {
    title: <FormattedMessage id="app.sidebar.list" />,
    children: [
      {
        title: <LinkTitle path="/list" icon="overview" id="list.basic"/>,
      }
    ]
  },
  detail: {
    title: <FormattedMessage id="app.sidebar.detail" />,
    children: [
      {
        title: <LinkTitle path="/detail-basic" icon="overview" id="detail.basic" />,
      }
    ]
  },
  form: {
    title: <FormattedMessage id="app.sidebar.form" />,
    children: [
      {
        title: <LinkTitle path="/form-basic" icon="overview" id="form.basic" />,
      },
      {
        title: <LinkTitle path="/form-step" icon="overview" id="form.step" />,
      }
    ]
  }
}

const navsToggled = {
  dashboard: {
    title: <FormattedMessage id="app.sidebar.overview" />,
    icon: 'overview',
  },
  list: {
    title: <FormattedMessage id="app.sidebar.list" />,
    children: [
      {
        title: <FormattedMessage id="app.sidebar.list.basic" />,
        icon: 'overview',
      }
    ]
  },
  detail: {
    title: <FormattedMessage id="app.sidebar.detail" />,
    children: [
      {
        title: <FormattedMessage id="app.sidebar.detail.basic" />,
        icon: 'overview',
      }
    ]
  },
  form: {
    title: <FormattedMessage id="app.sidebar.form" />,
    children: [
      {
        title: <FormattedMessage id="app.sidebar.form.basic" />,
        icon: 'overview',
      },
      {
        title: <FormattedMessage id="app.sidebar.form.step" />,
        icon: 'overview',
      }
    ]
  }
}

type Props = {
  toggle: boolean
}

export default (props: Props) => {
  const locale = getLocale();
  return (
    <Navigation navGroups={props.toggle ? navsToggled : navs} toggled={props.toggle} logo={<div className="SideBar__logo">Logo</div>}/>
  )
}