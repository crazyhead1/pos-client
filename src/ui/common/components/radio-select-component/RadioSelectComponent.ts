import {Colors} from '../../colors';
import {createUseStyles} from 'react-jss';

export const useStylesFromThemeFunction = createUseStyles({
  container: {
    '& label': {
      marginLeft: 12,
      fontWeight: 600,
      fontSize: 13,
      marginBottom: 5,
    },
    width: '100%',
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    border: `${Colors.grayLight} 1px solid`,
    borderRadius: 10,
    backgroundColor: Colors.blueGrayLight,
    textAlign: 'center',
    '& :first-child': {
      borderRadius: '10px 0 0 10px',
    },
    '& :last-child': {
      borderRadius: '0 10px 10px 0',
    },
  },
  buttons: {
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 500,
    letterSpacing: 1,
    color: Colors.gray,
  },
  activeButton: {
    color: Colors.purple,
    border: `${Colors.purple} 1px solid`,
    backgroundColor: Colors.blueGrayLightDim,
  },
});
