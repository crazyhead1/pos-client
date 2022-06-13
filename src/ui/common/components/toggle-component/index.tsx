import React from 'react';
import {useStylesFromThemeFunction, ComponentProps} from './ToggleComponent';

const ToggleComponent: React.FC<ComponentProps> = ({title, onChange, value: defaultValue = false}) => {
  const classes = useStylesFromThemeFunction();
  const [toggled, setToggled] = React.useState<boolean>(defaultValue);
  const onToggleChange = (e: any) => {
    setToggled(!toggled);
    if (onChange) onChange(!toggled);
  };
  return (
    <div className={classes.toggleContainer}>
      <label>{title}</label>
      <label className="switch">
        <input checked={toggled} type="checkbox" onChange={(e) => onToggleChange(e)} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default ToggleComponent;
