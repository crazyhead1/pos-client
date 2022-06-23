import {createUseStyles} from 'react-jss';
import {Colors} from '../../common/colors';
import {ThemeInterface} from '../../../interfaces/theme';

export interface ComponentProps {
  label?: string;
  options?: {value: any; label: string | undefined}[];
  isLoading?: boolean;
  products: any[];
  disabled?: boolean;
}

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    iconWrapper:{
      width: '20px',
      height: '20px',
      cursor: 'pointer',
    },
    equallyDistantRow:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    modalWrapper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '10px',
    },
    modalBodyWrapper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
    }
  };
});
