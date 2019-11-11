import React from 'react';
import { FormGroup, Col, FormControl, ControlLabel } from 'wizard-ui';

type Props = {
  labelCol?: number;
  label?: string;
  [key: string]: any;
};

export default (props: Props) => {
  const { labelCol = 4, label, ...rest } = props;
  return (
    <FormGroup>
      {Boolean(labelCol) && <Col componentClass={ControlLabel} md={labelCol}>
        {label}
      </Col>}
      <Col md={24 - labelCol}>
        <FormControl {...rest} />
      </Col>
    </FormGroup>
  );
};
