import React from 'react';
import 'wizard-ui/lib/style/index.scss';
import SideBar from './components/Sidebar';
import Content from './components/Content';
import Topbar from './components/Topbar';
import './style.scss';

export default () => (
  <div className="Dashboard">
    <aside className="Dashboard__sidebar">
      <SideBar />
    </aside>
    <section className="Dashboard__main">
      <Topbar/>
      <Content/>
    </section>
  </div>
)