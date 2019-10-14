import React from 'react';
import { Panel, Row, Col } from 'wizard-ui';

export default () => {
  return (
    <>
      <Panel collapsible header="监控">监控</Panel>
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
    </>
  )
}