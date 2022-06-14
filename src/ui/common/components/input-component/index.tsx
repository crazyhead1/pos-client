import React from 'react';
import PhoneInput from 'react-phone-number-input';
import PasswordEye from '../../../../assets/component/PasswordEye';
import PasswordEyeSlashed from '../../../../assets/component/PasswordEyeSlashed';
import helpIcon from '../../../../assets/help_icon.svg';
import {ComponentProps, useStylesFromThemeFunction} from './InputComponent';
import {Colors} from '../../colors';
import TooltipComponent from '../tooltip-component';

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

  React.useEffect(() => {
    setChange(value);
    if (onChange) onChange(value);
  }, [value]);

  const handleChange = (inputValue: any) => {
    setChange(inputValue);
    if (onChange) onChange(inputValue);
  };

  return (
    <div className={`${classes.contentContainer} ${containerClassName} `}>
      {label && (
        <label className={`${classes.label}`} htmlFor={name}>
          {label}
          {optional && <span>(Optional)</span>}
        </label>
      )}

      <div
        className={`${classes.inputContainer}`}
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
                      <TooltipComponent requirements={requirements} icon={helpIcon} />
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
                  className={`${classes.inputNumber}`}
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
          <TooltipComponent requirements={requirements} icon={helpIcon} />
        </div>
      )}
    </div>
  );
};

export default InputComponent;
