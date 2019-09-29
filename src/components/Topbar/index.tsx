import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Icon, Tooltip  } from 'wizard-ui';

type Props = {
  toggle: boolean
  setToggle: Function
}

export default (props: Props) => {
  const { toggle, setToggle } = props;
  const handleToggle = () => setToggle(!toggle);
  const handleSelect = (eventKey: any) => {
    switch(eventKey) {
      case 1:
        console.log('hello')
        handleToggle();
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
          <NavItem eventKey={2} href="#">
            <Tooltip
              label={<Icon type="help" />}
            >
              使用文档
            </Tooltip>
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>用户管理</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2}>退出登陆</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  )
}