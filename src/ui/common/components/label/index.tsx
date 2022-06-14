import React from 'react';
import {createUseStyles} from 'react-jss';

export const useStylesFromThemeFunction = createUseStyles(() => {
  return {
    label: {
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: '13px',
      fontWeight: 'bold',
    },
  };
});
interface ComponentProps {
    children: JSX.Element[] | JSX.Element;
}
const Label: React.FC<ComponentProps> = ({children}) => {
  const classes = useStylesFromThemeFunction();
  return <label className={`${classes.label}`}>{children}</label>;
};

export default Label;
