import React from 'react';
import { FormGroup, Col, Button } from 'wizard-ui';

type Props = {
  submitText: string;
  block?: boolean;
  disabled?: boolean;
  xsOffset?: number;
};

export default (props: Props) => {
  const { submitText, xsOffset = 4, ...rest } = props;
  return (
    <FormGroup>
      <Col xsOffset={xsOffset} md={24 - xsOffset}>
        <Button bsStyle="primary" type="submit" {...rest}>
          {submitText}
        </Button>
      </Col>
    </FormGroup>
  );
};
