import React from 'react';
import {createUseStyles} from 'react-jss';
import { DEFAULT_CURRENCY } from '../../constants';

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
const Currency: React.FC = () => {
  const classes = useStylesFromThemeFunction();
  const [currency, setCurrency] = React.useState(DEFAULT_CURRENCY);


//   React.useEffect(() => {

//     // fetch currency from api
//     setCurrency(DEFAULT_CURRENCY);
//   }), [];

  return <label className={`${classes.label}`}>{currency}</label>;
};

export default Currency;
