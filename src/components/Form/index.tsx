import React from 'react';
import { Form, Alert } from 'wizard-ui';
import Props from './type';

export default (props: Props) => {
  const { children, handleSubmit, errors, asyncError } = props;
  const error = Object.values(errors)[0] || asyncError;
  return (
    <Form horizontal onSubmit={(e: any) => handleSubmit(e)}>
      {error && <Alert bsStyle="danger">{error}</Alert>}
      {children}
    </Form>
  );
};
