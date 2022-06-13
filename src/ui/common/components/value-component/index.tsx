import React from 'react';
import {classes} from './ValueComponent';

interface ComponentProps {
  direction?: 'row' | 'column';
  label: string;
  value: string;
}

const ValueComponent: React.FC<ComponentProps> = ({direction = 'row', label, value}) => {
  return (
    <div className={`${classes.container} ${direction === 'row' ? classes.containerRow : classes.containerColumn}`}>
      <span className={`${classes.label} ${direction === 'row' && classes.labelRow}`}>{label}</span>
      <span className={`${classes.value}`}>{value}</span>
    </div>
  );
};

export default ValueComponent;
