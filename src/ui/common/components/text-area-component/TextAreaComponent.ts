import {ThemeInterface} from '../../../../interfaces/theme';
import {Colors} from '../../colors';
import {createUseStyles} from 'react-jss';

export interface ComponentProps {
  resizable?: boolean;
  errorClassName?: string;
  label?: string;
  onChange?: (e: any) => void;
  variant?: 'primary' | 'secondary';
  placeholder?: string;
}

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 20,
      '& label': {
        marginLeft: 10,
        fontWeight: 600,
        fontSize: 13,
      },
    },
    textAreaContainer: {
      position: 'relative',
    },
    textArea: {
      height: 100,
      border: `${Colors.grayLight} 1px solid`,
      borderRadius: 10,
      padding: 10,
      fontFamily: 'inherit',
      outline: 'none',
      '&:focus': {
        border: `${Colors.purple} 1px solid`,
      },
    },
    error: {
      color: Colors.red,
    },
    validated: {
      color: Colors.lightGreen,
    },
    errorChild: {
      border: `${Colors.red} 1px solid`,
    },
    validatedChild: {
      border: `${Colors.lightGreen} 1px solid`,
    },
    resizeDisabled: {
      resize: 'none',
    },
    textAreaSecondVariant: {
      backgroundColor: theme.formElement.background.secondary,
    },
  };
});
