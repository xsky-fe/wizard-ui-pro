import React from 'react';
import Form from '../../components/Form';
import FormFooter from '../../components/FormFooter';
import Field from '../../components/Field';
import { Well } from 'wizard-ui';
import { Props } from './type';
import { defaultUser } from './constants';
//@ts-ignore
import { FormattedMessage, useIntl } from 'react-intl';

export default (props: Props) => {
  const intl = useIntl();
  const { isSubmitting, getFieldProps, ...rest } = props;
  const userPlaceholder = intl.formatMessage({ id: 'app.name.placeholder' });
  const passwordPlaceholder = intl.formatMessage({ id: 'app.password.placeholder' });
  const submitText = intl.formatMessage({ id: 'app.login' });

  return (
    <div>
      <Well>
        <p><FormattedMessage id="app.usename"/>：{defaultUser.name}</p>
        <p><FormattedMessage id="app.password" />：{defaultUser.password}</p>
      </Well>
      <Form {...rest}>
        <Field labelCol={0} placeholder={userPlaceholder} {...getFieldProps('name')} />
        <Field
          labelCol={0}
          type="password"
          placeholder={passwordPlaceholder}
          {...getFieldProps('password')}
        />
        <FormFooter xsOffset={0} disabled={isSubmitting} submitText={submitText} block />
      </Form>
    </div>
  );
};

