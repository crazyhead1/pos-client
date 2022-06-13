import React from 'react';
import PhoneInput from 'react-phone-number-input';
import PasswordEye from '../../../../assets/component/PasswordEye';
import PasswordEyeSlashed from '../../../../assets/component/PasswordEyeSlashed';
import helpIcon from 'assets/help_icon.svg';
import {ComponentProps, useStylesFromThemeFunction} from './KlaimInput';
import {Colors} from '../../colors';
import KlaimTooltip from '../tooltip-component';

const InputComponent: React.FC<ComponentProps> = ({
  label,
  name,
  placeholder,
  type = 'text',
  containerClassName,
  isDisabled = false,
  isReadOnly,
  optional = false,
  value = '',
  showTooltip,
  requirements = [],
  isError,
  isTouched,
  variant = 'primary',
  onChange,
  defaultCountry = 'US',
  mask,
}) => {
  const classes = useStylesFromThemeFunction();
  const [toggle, setToggle] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);
  const [change, setChange] = React.useState<string>('');
  const isPasswordValidated = (error: boolean, touched: boolean) => {
    return error && touched ? classes.passwordError : classes.passwordValid;
  };

  const inputContainerClass = (v: string) => {
    switch (v) {
      case 'secondary': {
        return classes.inputSecondVariant;
      }
      default: {
        return '';
      }
    }
  };

  React.useEffect(() => {
    setChange(value);
    if (onChange) onChange(value);
  }, [value]);

  const handleChange = (inputValue: any) => {
    setChange(inputValue);
    if (onChange) onChange(inputValue);
  };

  const validateInput = (touched?: boolean, error?: boolean) => {
    if (touched && error) {
      return classes.inputContainerError;
    }
    if (touched) {
      return classes.inputContainerValidated;
    }
    return classes.inputContainerDefault;
  };

  const validateLabel = (touched?: boolean, error?: boolean) => {
    if (touched && error) {
      return classes.labelError;
    }
    if (touched) {
      return classes.labelValidated;
    }
    // return classes.labelDefault;
  };

  return (
    <div className={`${classes.contentContainer} ${containerClassName} `}>
      {label && (
        <label className={`${classes.label} ${validateLabel(isTouched, isError)}`} htmlFor={name}>
          {label}
          {optional && <span>(Optional)</span>}
        </label>
      )}

      <div
        className={`${classes.inputContainer} ${inputContainerClass(variant)} ${
          isFocus ? classes.inputContainerFocus : validateInput(isTouched, isError)
        } `}
      >
        {(() => {
          switch (type) {
            case 'password':
              return (
                <div
                  className={`${classes.passwordContainer} ${
                    isTouched ? isPasswordValidated(isError !== undefined, isTouched) : ''
                  }`}
                >
                  <div className={`${classes.passwordSubContainer} `}>
                    <input
                      value={value}
                      className={classes.passwordInput}
                      type={toggle ? 'text' : 'password'}
                      placeholder={placeholder}
                      disabled={isDisabled}
                      autoComplete="on"
                      readOnly={isReadOnly}
                    />
                    <button className={classes.passwordIcon} type="button" onClick={() => setToggle(!toggle)}>
                      {toggle ? <PasswordEye fill={Colors.purple} /> : <PasswordEyeSlashed fill={Colors.purple} />}
                    </button>
                  </div>
                  {showTooltip && (
                    <div>
                      <KlaimTooltip requirements={requirements} icon={helpIcon} />
                    </div>
                  )}
                </div>
              );
            case 'phone':
              return (
                <PhoneInput
                  international
                  limitMaxLength
                  defaultCountry={defaultCountry}
                  value={value}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`${classes.inputNumber} ${isTouched ? validateInput(isTouched, isError) : ''}`}
                />
              );
            default:
              return (
                <input
                  value={value}
                  className={`${classes.inputDefault}`}
                  type={toggle ? type : 'text'}
                  placeholder={placeholder}
                  disabled={isDisabled}
                  autoComplete="on"
                  readOnly={isReadOnly}
                  onBlur={() => setIsFocus(false)}
                  onFocus={() => setIsFocus(true)}
                  onChange={(e) => handleChange(e.currentTarget.value)}
                />
              );
          }
        })()}
        {type === 'password' && (
          <button className={classes.passwordIcon} type="button" onClick={() => setToggle(!toggle)}>
            {toggle ? <PasswordEye fill={Colors.purple} /> : <PasswordEyeSlashed fill={Colors.purple} />}
          </button>
        )}
      </div>
      {showTooltip && (
        <div>
          <KlaimTooltip requirements={requirements} icon={helpIcon} />
        </div>
      )}
    </div>
  );
};

export default InputComponent;
