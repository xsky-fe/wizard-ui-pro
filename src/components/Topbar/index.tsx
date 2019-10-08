import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Icon, Tooltip, InputGroup, FormControl  } from 'wizard-ui';
import { FormattedMessage } from 'react-intl';
import { setLocale, getLocale } from '../../utils/locale';
import './style.scss';

type Props = {
  toggle: boolean
  setToggle: Function
}

const locale = getLocale();

export default (props: Props) => {
  const { toggle, setToggle } = props;
  const handleToggle = () => setToggle(!toggle);
  const handleSelect = (eventKey: any) => {
    switch(eventKey) {
      case 1:
        handleToggle();
        break;
      case 2.1:
        setLocale(locale === 'zh-CN' ? 'en-US' : 'zh-CN');
        break;
      default:
    }
  }
  return (
    <div className="Topbar">
      <Navbar onSelect={handleSelect} fluid>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Icon type={toggle ? 'slide-right' : 'slide-left'} />
          </NavItem>
        </Nav>
        <Nav pullRight>
          <li className="Search">
            <InputGroup>
              <FormControl placeholder="Search" />
              <InputGroup.Addon>
                <Icon type="search" />
              </InputGroup.Addon>
            </InputGroup>
          </li>
          <NavDropdown eventKey={2} title={<FormattedMessage id="app.topbar.lang" />} id="basic-nav-dropdown-1">
            <MenuItem eventKey={2.1}>{locale === 'zh-CN' ? 'English' : '中文'}</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <Tooltip label={<Icon type="help" />}>
              <FormattedMessage id="app.topbar.doc" />
            </Tooltip>
          </NavItem>
          <NavDropdown eventKey={4} title={<FormattedMessage id="app.topbar.user" />} id="basic-nav-dropdown-2">
            <MenuItem eventKey={4.1}><FormattedMessage id="app.topbar.usermanagement" /></MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.2}><FormattedMessage id="app.topbar.logout" /></MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  )
}