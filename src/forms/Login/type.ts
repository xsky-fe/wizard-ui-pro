import { FieldInputProps, FormikErrors } from 'formik';
import FormProps from '../../components/Form/type';

export type Values = {
  name: string,
  password: string,
}

type Value = keyof Values;

export interface Props extends FormProps {
  getFieldProps: (item: Value) => FieldInputProps<Value>,
  isSubmitting: boolean,
}