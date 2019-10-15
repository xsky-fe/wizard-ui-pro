import React from 'react';
import { Breadcrumb, BreadcrumbItem, Icon, Tabs, Row, Col } from 'wizard-ui';
import Basic from '../../components/Basic';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import '../../mock/basic';
import axios from 'axios';
import './style.scss';

export default () => {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    axios.get('/basic').then((res: any) => {
      setData(res.data.book);
    })
  }, [])
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem active>
          <NavLink to="/list-basic">
            <Icon type="bind-dn" />
            <FormattedMessage id="app.detial.list"/>
          </NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <FormattedMessage id="app.detial.title" />
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col xs={18}>
          <Tabs
            tabs={[
              { title: <FormattedMessage id="app.detial.tab.basic" />, key: 'key-1', children: <div><FormattedMessage id="app.detial.tab.basic" /></div> },
              { title: <FormattedMessage id="app.detial.tab.chart" />, key: 'key-2', children: <div><FormattedMessage id="app.detial.tab.chart" /></div> },
              { title: <FormattedMessage id="app.detial.tab.log" />, key: 'key-3', children: <div><FormattedMessage id="app.detial.tab.log" /></div> },
            ]}
          />
        </Col>
        <Col xs={6}>
          <Basic data={data}/>
        </Col>
      </Row>
    </>
  )
}