import {createUseStyles} from 'react-jss';
import {Colors} from '../../colors';
import {ReactText} from 'react';
import {ThemeInterface} from '../../../../interfaces/theme';

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    container: {
      minWidth: 100,
      // overflowX: 'scroll',
      maxHeight: 250,
      position: 'relative',
    },
    buttonContainer: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 8,
      paddingBottom: 10,
      // flex: '1 1 0%',
      fontWeight: 600,
      fontSize: 14,
      color: Colors.blueGrayDark,
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: Colors.blueGrayLight,
      },
      '& button': {
        border: 'none',
        background: 'none',
        padding: 0,
        margin: 0,
      },
    },
    uncheck: {
      width: 10,
      height: 10,
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: Colors.blueGrayDark,
      marginRight: 4,
      padding: 2,
    },
    check: {
      width: 10,
      height: 10,
      borderRadius: 4,
      backgroundColor: Colors.purple,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: Colors.purple,
      marginRight: 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
    },
    checkAllContainer: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeft: 0,
      borderRight: 0,
      borderStyle: 'solid',
      backgroundColor: Colors.blueGrayLight,
      borderColor: Colors.grayLight,
      paddingTop: 7,
      marginBottom: 2,
    },
    deselectImg: {
      height: 12,
      width: 12,
    },
    button: {
      backgroundColor: Colors.purple,
      border: 'none',
      paddingLeft: 16,
      paddingRight: 16,
    },
    optionText: {
      whiteSpace: 'nowrap',
      color: Colors.blueGrayDark,
      fontWeight: 600,
    },
    hiddenDiv: {
      height: 40,
    },
    searchContainer: {
      overflow: 'hidden',
      backgroundColor: Colors.blueGrayLight,
      borderRadius: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: Colors.grayLight,
      display: 'flex',
      alignItems: 'center',
      '& input:focus': {
        outline: 'none',
      },
      padding: 3.5,
      marginTop: 5,
    },
    searchInput: {
      flex: 1,
      padding: 3.5,
      border: 0,
      backgroundColor: Colors.blueGrayLight,
      fontSize: 17,
    },
    selectContainer: {
      position: 'absolute',
      top: 45,
      left: 0,
      right: 0,
      background: theme.container.background.primary,
      height: 250,
      overflowX: 'hidden',
      zIndex: 100,
      borderRadius: 10,
      border: `1px solid ${theme.container.border.primary}`,
    },
    icon: {
      padding: 7,
      paddingLeft: 11,
    },
    iconSeparator: {
      width: 1,
      background: Colors.graySeparator,
      height: 24,
    },
    label: {
      fontSize: 13,
      fontWeight: 700,
      marginLeft: 10,
    },
  };
});

export interface OptionValue {
  label: string;
  value: string;
  leftIcon?: string;
  rightIcon?: string;
}

export interface ComponentProps {
  options: OptionValue[];
  setValue?: React.Dispatch<React.SetStateAction<OptionValue[]>>;
  selectAllTitle?: string;
  onChange?: (values: OptionValue[]) => void;
  value?: OptionValue[];
  disableSearch?: boolean;
  disableSelectAll?: boolean;
  className?: string;
  label?: string;
  isHover?: boolean;
  placeholder?: string;
  optional?: boolean;
}
