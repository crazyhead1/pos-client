import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import {Colors} from '../../colors';

interface ComponentProps {
  customClass?: string;
}

const useStylesFromThemeFunction = createUseStyles(() => {
  return {
    '@keyframes spin': {
      '0%': {transform: 'rotate(0deg)'},
      '100%': {transform: 'rotate(360deg)'},
    },
    loader: {
      animation: '$spin 2s linear infinite',
      border: '3px solid #f3f3f3',
      borderRadius: '50%',
      borderTop: `3px solid ${Colors.purple}`,
      height: 14,
      width: 14,
    },
  };
});

const LoadingSpinner: FC<ComponentProps> = ({customClass}) => {
  const classes = useStylesFromThemeFunction();

  return <div className={`${customClass} ${classes.loader}`} />;
};

export default LoadingSpinner;
