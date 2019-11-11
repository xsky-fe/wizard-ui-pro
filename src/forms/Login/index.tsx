import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Form from './form';
import * as Yup from 'yup';
import { Values } from './type';
import { setCookie } from '../../utils/cookie';
import { defaultUser } from './constants';

export default () => {
  let history = useHistory();
  const [asyncError, setAsyncError] = React.useState('');
  const initialValues: Values = {
    name: '',
    password: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('用户名不能为空！'),
    password: Yup.string().required('密码不能为空！'),
  });
  const onSubmit = (values: Values) => {
    if (defaultUser.name === values.name && defaultUser.password === values.password) {
      setCookie(values);
      history.push('/');
    } else {
      setAsyncError('用户或者密码不正确！');
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return <Form {...formik} asyncError={asyncError} />;
};
