import React from 'react';
import {useStylesFromThemeFunction, ComponentProps} from './TextAreaComponent';

const TextAreaComponent: React.FC<ComponentProps> = ({resizable, label, placeholder, variant = 'primary', onChange}) => {
  const classes = useStylesFromThemeFunction();

  // const isValidated = (error: boolean, touched: boolean) => {
  //   return error && touched ? classes.error : classes.validated;
  // };

  // const isValidatedChild = (error: boolean, touched: boolean) => {
  //   return error && touched ? classes.errorChild : classes.validatedChild;
  // };

  const inputContainerClass = (v: string) => {
    switch (v) {
      case 'secondary': {
        return classes.textAreaSecondVariant;
      }
      default: {
        return '';
      }
    }
  };

  return (
    <div className={`${classes.container} `}>
      <label>{label}</label>
      <textarea
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
        placeholder={placeholder}
        className={`${classes.textArea} ${inputContainerClass(variant)} ${resizable ? classes.resizeDisabled : ''} `}
      />
    </div>
  );
};

export default TextAreaComponent;
