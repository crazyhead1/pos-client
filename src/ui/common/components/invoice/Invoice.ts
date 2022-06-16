import {createUseStyles} from 'react-jss';
import {Colors} from '../../colors';
import {ThemeInterface} from '../../../../interfaces/theme';
import { Product } from '../../../../interfaces/product';

export interface ComponentProps {
  label?: string;
  options?: {value: any; label: string | undefined}[];
  isLoading?: boolean;
  products: any[];
  handleCancel?: () => void;
  handleConfirm?: () => void;
  handlePrint?: () => void;
  disabled?: boolean;
}

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    totalBillContainer: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      borderRadius: '5px',
      padding: '5px',
      minWidth: 'fit-content',
      backgroundColor: Colors.blueGrayLightDim
    },
    row:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      width: '100%',
    },
    column:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start  ',
      width: '100%',
    },
    equallyDistantRow:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
      paddingTop: '10%',
      paddingBottom:'5%',
      minWidth: 'fit-content',
    },
    equallyDistantColumn:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-around',
        flexWrap: 'wrap',
        paddingTop: '10%',
        paddingLeft: '8%',
        justifyContent: 'space-around',
        width: '100%',
        minWidth: 'fit-content',
      },
    buttonsContainer: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: '10%',
      justifyContent: 'flex-end',
    },
    padding8: {
        padding: '8%'
    },
    paddingtop8: {
        paddingTop: '8%',
        paddingLeft: '5%',
    }
  };
});
