import {createUseStyles} from 'react-jss';
import {Colors} from '../../colors';

export const useStylesFromThemeFunction = createUseStyles({
  tooltipContainer: {
    background: Colors.purple,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    width: 20,
    height: 20,
    position: 'relative',
  },
  contentContainer: {
    position: 'absolute',
    left: -30,
    bottom: 50,
    background: Colors.blueGrayDark,
    color: Colors.white,
    width: 411,
    maxHeight: 300,
    overflowY: 'scroll',
    padding: 10,
    borderRadius: 5,
    '& h3': {
      fontSize: 14,
      margin: 10,
    },
    '& li': {
      fontSize: 12,
    },
    '& ul': {
      margin: 10,
      paddingLeft: 15,
    },
  },
  tooltipArrow: {
    width: 15,
    height: 15,
    background: Colors.blueGrayDark,
    position: 'absolute',
    bottom: 45,
    transform: 'rotate(45deg)',
  },
});
