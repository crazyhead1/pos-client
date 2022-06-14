import React from 'react';
import {createUseStyles} from 'react-jss';
import {ThemeInterface} from '../../../../interfaces/theme';
import { Colors } from '../../colors';

interface ComponentProps {
  children?: JSX.Element[] | JSX.Element;
  variant?: 'primary' | 'secondary' | 'primary-outline';
  onClick?: () => void;
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    default: {
      minWidth: 100,
      minHeight: 42,
      borderRadius: 10,
      background: 'none',
      border: 'none',
      fontWeight: 600,
      marginLeft: 4,
      marginRight: 4,
      '&:hover': {
        cursor: 'pointer',
      },
    },
    primary: {
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: Colors.purple,
      color: Colors.white,
    },
    primaryOutline: {
      borderWidth: 2,
      borderStyle: 'solid',
      backgroundColor: 'inherit',
      borderColor: Colors.purple,
      color: Colors.black,
    },
    secondary: {
      borderWidth: 1,
      borderStyle: 'solid',
      color: Colors.black,
      backgroundColor: Colors.grayLight,
    },
    disable: {
      '&:hover': {
        cursor: 'not-allowed',
      },
      backgroundColor: 'gray',
      color: 'lightgray',
    },
  };
});

const ButtonComponent: React.FC<ComponentProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  style,
  className,
  disabled = false,
}) => {
  const classes = useStylesFromThemeFunction();
  const handleVariant = () => {
    if (disabled) {
      return classes.disable;
    }
    switch (variant) {
      case 'primary-outline': {
        return classes.primaryOutline;
      }
      case 'secondary': {
        return classes.secondary;
      }
      default:
        return classes.primary;
    }
  };
  return (
    <button
      style={style}
      type={type}
      className={`${className} ${classes.default} ${handleVariant()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
