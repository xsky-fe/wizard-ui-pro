import React from 'react';
import Form from '../../components/Form';
import FormFooter from '../../components/FormFooter';
import Field from '../../components/Field';
import { Well } from 'wizard-ui';
import { Props } from './type';
import { defaultUser } from './constants';

export default (props: Props) => {
  const { isSubmitting, getFieldProps, ...rest } = props;
  return (
    <>
      <Well>
        <p>用户：{defaultUser.name}</p>
        <p>密码：{defaultUser.password}</p>
      </Well>
      <Form {...rest}>
        <Field labelCol={0} placeholder="请填写名称" {...getFieldProps('name')} />
        <Field
          labelCol={0}
          label="密码："
          type="password"
          placeholder="请填写密码"
          {...getFieldProps('password')}
        />
        <FormFooter xsOffset={0} disabled={isSubmitting} submitText="登录" block />
      </Form>
    </>
  );
};
