import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Form from './form';
import * as Yup from 'yup';
import { Values } from './type';
import { setCookie } from '../../utils/cookie';
import { defaultUser } from './constants';
import { FormattedMessage } from 'react-intl';

const epmtyUseranme: any = <FormattedMessage id="app.name.validate"/>;
const epmtyPassword: any = <FormattedMessage id="app.password.validate" />;
const errorLogin: any = <FormattedMessage id="app.login.validate" />;

export default () => {
  let history = useHistory();
  const [asyncError, setAsyncError] = React.useState('');
  const initialValues: Values = {
    name: '',
    password: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required(epmtyUseranme),
    password: Yup.string().required(epmtyPassword),
  });
  const onSubmit = (values: Values) => {
    if (defaultUser.name === values.name && defaultUser.password === values.password) {
      setCookie(values);
      history.push('/');
    } else {
      setAsyncError(errorLogin);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return <Form {...formik} asyncError={asyncError} />;
};
