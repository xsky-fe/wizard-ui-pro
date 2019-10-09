import React from 'react';
import { Panel, Row, Col } from 'wizard-ui';

export default () => {
  return (
    <>
      <Panel>i am panel </Panel>
      <Row>
        <Col md={8}>
          <Panel>1</Panel>
        </Col>
        <Col md={8}>
          <Panel>1</Panel>
        </Col>
        <Col md={8}>
          <Panel>1</Panel>
        </Col>
      </Row>
    </>
  )
}