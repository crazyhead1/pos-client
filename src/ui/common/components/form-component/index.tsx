import React from 'react';
import {Form, Formik} from 'formik';
import {ComponentProps, useStylesFromThemeFunction} from './FormComponent';

const FormCmponent: React.FC<ComponentProps> = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  enableReinitialize = false,
  validateOnChange = true,
  validateOnBlur = false,
  customClass,
}) => {
  const classes = useStylesFromThemeFunction();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
      validateOnChange={validateOnChange}
      validateOnBlur={validateOnBlur}
    >
      {({handleSubmit}) => {
        return (
          <Form onSubmit={handleSubmit} className={customClass !== undefined ? customClass : classes.formContainer}>
            {children}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormCmponent;
