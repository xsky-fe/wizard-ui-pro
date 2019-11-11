import { FormikErrors } from 'formik';

type Value = string;

type Props = {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void,
  errors: FormikErrors<object>,
  asyncError?: string,
  children?: any
}

export default Props;