import React from 'react';
import { Breadcrumb, BreadcrumbItem, Icon, Tabs, Row, Col } from 'wizard-ui';
import Basic from '../../components/Basic';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import basicData from '../../mock/basic';
import './style.scss';

export default () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem active>
          <NavLink to="/list-basic">
            <Icon type="bind-dn" />
            <FormattedMessage id="app.detail.list"/>
          </NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <FormattedMessage id="app.detail.title" />
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col xs={18}>
          <Tabs
            tabs={[
              { title: <FormattedMessage id="app.detail.tab.basic" />, key: 'key-1', children: <div><FormattedMessage id="app.detail.tab.basic" /></div> },
              { title: <FormattedMessage id="app.detail.tab.chart" />, key: 'key-2', children: <div><FormattedMessage id="app.detail.tab.chart" /></div> },
              { title: <FormattedMessage id="app.detail.tab.log" />, key: 'key-3', children: <div><FormattedMessage id="app.detail.tab.log" /></div> },
            ]}
          />
        </Col>
        <Col xs={6}>
          <Basic data={basicData}/>
        </Col>
      </Row>
    </>
  )
}