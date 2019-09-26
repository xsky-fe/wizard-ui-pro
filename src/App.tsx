import React from 'react';
import 'wizard-ui/lib/style/index.scss';
import SideBar from './components/Sidebar';
import Content from './components/Content';
import Topbar from './components/Topbar';
import './style.scss';

export default () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="Dashboard">
      <aside className={`Dashboard__sidebar ${toggle ? 'collapsed' : ''}`}>
        <div className="SideBar__logo">Logo</div>
        <SideBar toggle={toggle}/>
      </aside>
      <section className="Dashboard__main">
        <Topbar toggle={toggle} setToggle={setToggle}/>
        <Content />
      </section>
    </div>
  )
}