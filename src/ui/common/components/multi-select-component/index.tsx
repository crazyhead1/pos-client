import React from 'react';
import {
  ComponentProps,
  OptionValue,
  useStylesFromThemeFunction,
} from './MultiSelectComponent';
import checkIcon from 'assets/check_icon.svg';
import deselectIcon from 'assets/deselect_icon.svg';
import searchIcon from 'assets/search_icon.svg';
import ChevronArrowDown from '../../../../assets/component/ChevronArrowDown';

const MultiSelectComponent: React.FC<ComponentProps> = ({
  options,
  setValue,
  selectAllTitle,
  disableSelectAll,
  onChange,
  value,
  className,
  label,
  isHover = false,
  placeholder,
  optional = false,
}) => {
  const node = React.useRef<HTMLDivElement>(null);
  const classes = useStylesFromThemeFunction();
  const [selected, setSelected] = React.useState<OptionValue[]>(value !== undefined ? value : []);
  const [filter, setFilter] = React.useState<OptionValue[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [typing, setTyping] = React.useState<boolean>(false);
  const [hover, setHover] = React.useState<boolean>(false);
  let exitTimeout: NodeJS.Timeout;
  const selectedItems = selected.length > 0 ? selected[0].label : '';
  const addSelectedItems = selected.length > 1 ? `+ ${selected.length - 1}` : '';

  React.useEffect(() => {
    setFilter(
      options.filter(
        (option) =>
          option.label.toLowerCase().match(search.toLowerCase()) ||
          option.value.toLowerCase().match(search.toLowerCase()),
      ),
    );
  }, [search]);

  React.useEffect(() => {
    if (value && value?.length > 0) {
      setSelected([...value]);
      if (onChange) onChange(value);
    }
  }, [value]);

  React.useEffect(() => {
    setFilter(options);
  }, [options]);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleHover);
    return () => {
      document.removeEventListener('mousedown', handleHover);
    };
  }, []);

  const handleHover = (e: any) => {
    if (node.current !== null) {
      if (node.current?.contains(e.target)) {
        return;
      }
    }
    setHover(false);
  };

  const searchFieldValidate = (e: any) => {
    const stringToValidate = e.target.value;
    const validatedString = stringToValidate.replace(/[^a-zA-Z0-9]/g, '');
    setSearch(validatedString);
  };

  const isSelected = (option: OptionValue) => {
    return selected.some((select) => select.value === option.value);
  };

  const selectAll = () => {
    if (options.length === selected.length) {
      setSelected([]);
      if (setValue) setValue([]);
      if (onChange) onChange([]);
    } else {
      const newValue = [
        ...selected,
        ...options.filter((option) => {
          if (selected.some((select) => select.value === option.value)) {
            return false;
          }
          return true;
        }),
      ];
      setSelected(newValue);
      if (setValue) setValue(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const onSelect = (option: OptionValue) => {
    if (selected.some((select) => select.value === option.value)) {
      const newValue = [...selected.filter((select) => select.value !== option.value)];
      setSelected(newValue);
      if (setValue) setValue(newValue);
      if (onChange) onChange(newValue);
    } else {
      const newValue = [...selected, option];
      setSelected(newValue);
      if (setValue) setValue(newValue);
      if (onChange) onChange(newValue);
    }
  };

  return (
    <div ref={node}>
      {label && <label className={classes.label}>{label}</label>}
      {optional && <span style={{fontSize: 13, marginLeft: 10}}>(Optional)</span>}
      <div
        role="button"
        className={`${classes.container} ${className}`}
        onMouseEnter={() => {
          if (isHover) {
            if (exitTimeout) {
              clearTimeout(exitTimeout);
            }
            setHover(true);
          }
        }}
        onMouseLeave={() => {
          if (isHover) {
            exitTimeout = setTimeout(() => {
              setHover(false);
            }, 200);
          }
        }}
      >
        <div className={classes.searchContainer}>
          <input
            className={classes.searchInput}
            onChange={(e) => searchFieldValidate(e)}
            value={search}
            onFocus={() => {
              if (exitTimeout) {
                clearTimeout(exitTimeout);
              }
              setHover(true);
              setTyping(true);
            }}
            // onBlur={() => {
            //   exitTimeout = setTimeout(() => {
            //     setHover(false);
            //   }, 200);
            //   setTyping(false);
            // }}
            placeholder={(selected.length > 0 && `${selectedItems} ${addSelectedItems}`) || placeholder || 'Select...'}
          />
          <span className={classes.iconSeparator} />
          <ChevronArrowDown className={classes.icon} />
        </div>
        {hover && (
          <div className={classes.selectContainer}>
            {!disableSelectAll && (
              <div className={`${classes.buttonContainer} ${classes.checkAllContainer}`}>
                <button type="button" onClick={() => selectAll()}>
                  {options.length === selected.length ? (
                    <div className={classes.check}>
                      <img className={classes.deselectImg} src={deselectIcon} alt="deselect" />
                    </div>
                  ) : (
                    <div className={classes.uncheck} />
                  )}
                </button>
                <span>{selectAllTitle === undefined ? 'Select All' : selectAllTitle}</span>
              </div>
            )}
            {filter.map((option: OptionValue, index: number) => {
              return (
                <div className={classes.buttonContainer} key={`${option.value}_${index}`}>
                  <button type="button" onClick={() => onSelect(option)}>
                    {isSelected(option) ? (
                      <div className={classes.check}>
                        <img src={checkIcon} alt="check" />
                      </div>
                    ) : (
                      <div className={classes.uncheck} />
                    )}
                  </button>

                  {option.leftIcon && <img src={option.leftIcon} alt="left" />}
                  <span className={classes.optionText}>{option.label}</span>
                  {option.rightIcon && <img src={option.rightIcon} alt="right" />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectComponent;
