import {createUseStyles} from 'react-jss';
import {Colors} from '../../colors';
import {Country} from 'react-phone-number-input';
import {ThemeInterface} from '../../../../interfaces/theme';

export interface ComponentProps {
  children?: JSX.Element[] | JSX.Element;
  label?: string;
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  type?: 'text' | 'email' | 'number' | 'password' | 'checkbox' | 'phone' | 'calendar';
  labelClassName?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  errorClassName?: string;
  containerClassName?: string;
  optional?: boolean;
  value?: string;
  showTooltip?: boolean;
  requirements?: string[];
  isError?: boolean;
  isTouched?: boolean;
  defaultCountry?: Country;
  variant?: 'primary' | 'secondary';
  onChange?: (value: any | undefined) => void;
  mask?: string;
}

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    inputDefault: {
      all: 'unset',
      width: '100%',
      height: 38,
      padding: '2px 8px',
      '&:focus': {
        border: 'none',
        background: 'none',
      },
    },
    inputDisabled: {
      opacity: 0.3,
      pointerEvents: 'none',
    },
    inputNumber: {
      overflow: 'hidden',
      paddingLeft: 10,
      borderRadius: '10px',
      backgroundColor: Colors.blueGrayLight,
      width: '100%',
      '& .PhoneInputInput': {
        border: 'none',
        font: 'inherit',
        fontSize: '15px',
        backgroundColor: Colors.blueGrayLight,
        '&:focus': {
          outline: '0px',
          border: 'none',
        },
        padding: '9.5px',
        color: Colors.grayLabel,
        '&::placeholder': {
          color: Colors.grayInputPlaceholder,
        },
      },
      '& .PhoneInputCountrySelect': {
        '& option': {
          padding: 2,
          font: 'inherit',
          fontSize: '15px',
        },
      },
    },
    contentContainer: {
      '& span': {
        paddingLeft: '10px',
      },
    },
    label: {
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingBottom: '4px',
      fontSize: '13px',
      display: 'flex',
      justifyContent: 'space-between',
      '& span': {
        fontWeight: 'normal',
        fontSize: '13px',
      },
      fontWeight: 'bold',
    },
    passwordContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      width: '100%',
    },
    passwordSubContainer: {
      border: 'solid',
      borderWidth: '1px',
      borderRadius: '10px',
      borderColor: Colors.grayLight,
      backgroundColor: Colors.blueGrayLight,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    passwordError: {
      borderColor: Colors.red,
    },
    passwordValid: {
      borderColor: Colors.lightGreen,
    },
    passwordInput: {
      border: 0,
      height: '100%',
      width: '100%',
      borderRadius: '10px 0px 0px 10px',
      backgroundColor: Colors.blueGrayLight,
      padding: '12px',
      fontSize: '15px',
      '&:focus': {
        outline: '0px',
        borderRadius: '10px',
        backgroundColor: Colors.blueGrayLight,
      },
    },
    passwordIcon: {
      border: 0,
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: Colors.blueGrayLight,
    },
    inputContainer: {
      border: '1px solid',
      borderWidth: '1px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      width: '100%',
    },
    labelDefault: {
      color: Colors.grayLabel,
    },
  };
});
