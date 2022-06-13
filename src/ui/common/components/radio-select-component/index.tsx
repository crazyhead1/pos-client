import React from 'react';
import {useStylesFromThemeFunction} from './RadioSelectComponent';

interface Selection {
  label: string;
  value: string;
}

interface ComponentProps {
  selections: Selection[];
  onChange?: (e: any) => void;
  label?: string;
  value?: any;
}

const RadioSelectComponent: React.FC<ComponentProps> = ({selections, onChange, label, value: initialValue}) => {
  const classes = useStylesFromThemeFunction();
  const [active, setActive] = React.useState(0);
  const handleChange = (value: string) => {
    if (onChange) onChange(value);
  };
  React.useEffect(() => {
    if (initialValue) setActive(selections.findIndex((selection) => selection.value === initialValue));
  }, [initialValue]);
  return (
    <div className={classes.container}>
      {label && <label>{label}</label>}
      <div className={classes.buttonsContainer}>
        {selections &&
          selections.map((selection, i) => (
            <div
              key={i}
              role="button"
              style={{flexBasis: `${100 / selections.length}%`}}
              className={`${classes.buttons} ${active === i ? classes.activeButton : ''}`}
              onClick={() => {
                setActive(i);
                handleChange(selection.value);
              }}
            >
              {selection.label}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RadioSelectComponent;
