import React from 'react';
import 'wizard-ui/lib/style/index.css';
import SideBar from './components/Sidebar';
import Content from './components/Content';
import Topbar from './components/Topbar';
import LocaleProvider from './components/LocaleProvider';
import { getLocale } from './utils/locale';
import './style/index.scss';

export default () => {
  const [toggle, setToggle] = React.useState(false);
  const locale = getLocale();
  return (
    <LocaleProvider locale={locale}>
      <div className="Dashboard">
        <aside className={`Dashboard__sidebar ${toggle ? 'collapsed' : ''}`}>
          <SideBar toggle={toggle}/>
        </aside>
        <section className="Dashboard__main">
          <Topbar toggle={toggle} setToggle={setToggle}/>
          <Content />
        </section>
      </div>
    </LocaleProvider>
  )
}