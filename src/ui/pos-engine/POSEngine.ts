import {createUseStyles} from 'react-jss';
import {Colors} from '../common/colors';
import {ThemeInterface} from '../../interfaces/theme';
import { Product } from '../../interfaces/product';

export interface ComponentProps {
  label?: string;
  options?: {value: any; label: string | undefined}[];
  isLoading?: boolean;
  products?: any[];
  disabled?: boolean;
}

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },
    innerContainerLeft: {
        width: '70%',
        minWidth: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        margin: '2px',
        borderRadius: '10px',
        backgroundColor: Colors.blueGrayLight,
    },
    innerContainerRight: {
        width: '30%',
        minWidth: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        margin: '2px',
        borderRadius: '10px',
        backgroundColor: Colors.blueGrayLight
    },
    productSearchContainer: {
        width: '100%',
        position: 'relative',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px',
        margin: '5px',
        borderRadius: '5px',
        backgroundColor: Colors.blueGrayLightDim
    },
    productSuggestionContainer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        minHeight: 'fit-content',
        padding: '10px',
        backgroundColor: Colors.blueGrayLight
    },
    addedProductsContainer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.blueGrayLight
    },
    totalBillContainer: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: Colors.blueGrayLightDim
    },
    row:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      width: '100%',
    },
    column:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      width: '100%',
    },
    equallyDistantRow:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },
    buttonsContainer: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
    },
    iconWrapper:{
      width: '20px',
      height: '20px',
      cursor: 'pointer',
    },
    colorRed: {
      color: Colors.red,
    },
    qualtityButtonWrapper: {
      width: '30px',
      height: '20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    centeredRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',

    }
  };
});

interface CustomStyle {
  variant?: 'primary' | 'secondary';
  isFocus: boolean;
  isError: boolean;
  isTouched?: boolean;
}

export const customStyles = ({variant, isFocus, isError, isTouched}: CustomStyle) => {
  const color = () => {
    if (isTouched && !isError) {
      return Colors.successTextGreen;
    }
    if (isError) {
      return Colors.red;
    }
    if (isFocus) {
      return Colors.purple;
    }

    return Colors.grayLight;
  };
  return {
    control: (base: any, state: {isFocused: any}) => ({
      ...base,
      background: variant === 'primary' ? 'white' : Colors.blueGrayLight,
      borderRadius: 10,
      height: 42,
      border: `1px solid ${color()}`,
      boxShadow: 'none',
    }),
    menuList: (base: any) => ({
      ...base,
      padding: 0,
      borderRadius: 10,
      '&:focus': {
        outline: '0px',
        borderRadius: '10px',
        border: `${Colors.purple} 1px solid`,
        backgroundColor: Colors.white,
      },
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: 10,
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: Colors.blueGrayDark,
      '&:hover': {
        color: Colors.blueGrayDark,
      },
    }),
    option: (base: any, state: {isSelected: any}) => ({
      ...base,
      backgroundColor: state.isSelected && Colors.purple,
      '&:hover': {backgroundColor: !state.isSelected && Colors.blueGrayLight},
      ':active': {
        ...base[':active'],
        backgroundColor: Colors.blueGrayLight,
      },
    }),
    valueContainer: (base: any) => ({
      ...base,
    }),
  };
};
