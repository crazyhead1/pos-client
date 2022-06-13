import {FormikHelpers} from 'formik';
import {createUseStyles} from 'react-jss';

export interface ComponentProps {
  children: JSX.Element[] | JSX.Element;
  initialValues: {
    [field: string]: any;
  };
  validationSchema: {
    [field: string]: any;
  };
  onSubmit: (
    values: {
      [field: string]: any;
    },
    formikHelpers: FormikHelpers<{
      [field: string]: any;
    }>,
  ) => any;
  enableReinitialize?: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  customClass?: string;
}

export const useStylesFromThemeFunction = createUseStyles(() => {
  return {
    formContainer: {},
  };
});
