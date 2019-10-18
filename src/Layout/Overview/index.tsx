import React from 'react';
import { Panel, Row, Col, RangePicker, ButtonToolbar, DropdownButton } from 'wizard-ui';
import Chart from '../../components/Chart';
import MockData from '../../mock/dashboard';
import './style.scss';

export default () => {
  const monitorTitle = (
    <>
      <span>监控</span>
      <ButtonToolbar>
        <DropdownButton
          bsSize="small"
          bsStyle="default"
          title="1 个月"
          id="duration-select-dropdown"
          menu={[
            '1 天内',
            '1 周内',
            '1 个月内',
            '三个月内',
            '自定义'
          ]}
          pullRight={true}
        />
      </ButtonToolbar>
      </>
  )
  return (
    <div className="Overview">
      <Panel header={monitorTitle} className="Overview__Monitor">
        <Chart option={MockData} height="400px"/>
      </Panel>
      <Row>
        <Col md={8}>
          <Panel header="面板一">内容一</Panel>
        </Col>
        <Col md={8}>
          <Panel header="面板二">内容二</Panel>
        </Col>
        <Col md={8}>
          <Panel header="面板三">内容三</Panel>
        </Col>
      </Row>
    </div>
  )
}