import React from 'react';
import Select from 'react-select';
import {
  ComponentProps,
  customStyles,
  useStylesFromThemeFunction,
} from './DropdownSearch';
import {InputActionMeta} from 'react-select';

const DropdownSearch: React.FC<ComponentProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  isLoading,
  isClearable = true,
  disabled = false,
  isOptional = false,
  variant = 'primary',
  isError = false,
  isTouched = false,
  onInputChange,
}) => {
  const classes = useStylesFromThemeFunction();

  // React.useEffect(() => {
  //   if (onChange) onChange(value);
  // }, [value]);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e && e.value ? e.value : '');
    }
  };

  const handleInputChange = (newValue: string, actionMeta: InputActionMeta) => {
    if (onInputChange) onInputChange(newValue);
  };

  const [isFocus, setIsFocus] = React.useState(false);
  return (
    <div className={classes.container}>
      {label && (
        <div
          className={`${classes.SelectLabel}`}
        >
          {label}
          {isOptional && <span>(Optional)</span>}
        </div>
      )}
      <Select
        onInputChange={handleInputChange}
        styles={customStyles({variant, isFocus, isError, isTouched})}
        isClearable={isClearable}
        options={options}
        onChange={handleOnChange}
        value={options.find((o: any) => o.value === value)}
        defaultValue={options.find((o: any) => o.value === value)}
        placeholder={placeholder}
        isLoading={isLoading}
        isDisabled={disabled}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
    </div>
  );
};

export default DropdownSearch;
