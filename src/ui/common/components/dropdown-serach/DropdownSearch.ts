import {createUseStyles} from 'react-jss';
import {Colors} from '../../colors';
import {ThemeInterface} from '../../../../interfaces/theme';

export interface ComponentProps {
  label?: string;
  options: {value: any; label: string | undefined}[];
  value?: any;
  onChange?: (value: any) => void;
  onInputChange?: (value: any) => void;
  placeholder?: string;
  isClearable?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  isOptional?: boolean;
  name?: string;
  variant?: 'primary' | 'secondary';
  isError?: boolean;
  isTouched?: boolean;
}

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    SelectLabel: {
      color: '#222b45',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 4,
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingBottom: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      '& span': {
        fontWeight: 'normal',
        fontSize: '13px',
      },
    },
    container: {
      width: '100%',
    },
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
