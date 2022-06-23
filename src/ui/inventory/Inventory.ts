import {createUseStyles} from 'react-jss';
import {ThemeInterface} from '../../interfaces/theme';
import {Colors} from '../common/colors';

export interface ComponentProps {

}

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    tabs: {
        display: 'flex',
        flexDirection:'column',
        width: '30px',
        height: '100%',
        position: 'fixed',
        justifyContent: 'flex-end',
        alignContent: 'center',
        left: '0px',
        top: '0px',
        fontSize: '22px',
        fontFamily: 'sans-serif',
        color: Colors.white,
        backgroundColor: Colors.blueGrayDark,
    },
    tabsWithSidebar: {
      display: 'flex',
      flexDirection:'column',
      width: '200px',
      height: '100%',
      position: 'fixed',
      justifyContent: 'flex-end',
      alignContent: 'center',
      left: '0px',
      top: '0px',
      backgroundColor: Colors.blueGrayDarkLight,
  },
    tabsStyle: {
      display: 'flex',
      flexDirection:'column',
      width: '200px',
      height: '100%',
      position: 'fixed',
      justifyContent: 'flex-start',
      alignContent: 'center',
      left: '0px',
      top: '0px',
      fontSize: '22px',
      fontFamily: 'sans-serif',
    },
    contentPanWithSidebar: {
      display: 'flex',
      flexDirection:'column',
      marginLeft: '200px',
    },
    contentPan: {
      marginLeft: '30px',
  },
  SidebarArrow: {
    cursor: 'pointer',
    position: 'absolute',
  }
  };
});
