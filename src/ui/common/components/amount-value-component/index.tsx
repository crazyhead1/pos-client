import React from 'react';
import Currency from '../currency';
import {useStylesFromThemeFunction} from './AmountValueComponent';

interface ComponentProps {
  direction?: 'row' | 'column';
  label: string;
  value: string;
}

const AmountValueComponent: React.FC<ComponentProps> = ({direction = 'row', label, value}) => {
    const classes = useStylesFromThemeFunction();
  return (
    <div className={`${classes.container} ${direction === 'row' ? classes.containerRow : classes.containerColumn}`}>
      <span className={`${classes.label} ${direction === 'row' && classes.labelRow}`}>{label}</span>
      <span className={`${classes.value}`}><Currency/>{value}</span>
    </div>
  );
};

export default AmountValueComponent;
