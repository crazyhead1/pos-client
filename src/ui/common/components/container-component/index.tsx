import React from 'react';
import {createUseStyles} from 'react-jss';
import {ThemeInterface} from '../../../../interfaces/theme';

interface ComponentProps {
  children?: JSX.Element[] | JSX.Element;
  variant?: 'primary' | 'secondary' | 'primary-shadow' | 'primary-outline';
  style?: React.CSSProperties;
  className?: string;
}

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    container: {
      borderRadius: 10,
      padding: 10,
    },
    primary: {
      background: theme.container.background.primary,
    },
    secondary: {
      background: theme.container.background.secondary,
    },
    primaryShadow: {
      background: theme.container.background.primary,
      boxShadow: '0px 5px 5px -1px rgb(96 97 112 / 16%)',
    },
    primaryOutline: {
      background: theme.container.background.primary,
      borderStyle: 'solid',
      borderColor: theme.container.border.primary,
      borderWidth: 1,
    },
    secondaryOutline: {
      background: theme.container.background.primary,
      borderStyle: 'solid',
      borderColor: theme.container.border.secondary,
      borderWidth: 1,
    },
  };
});

const ContainerComponent: React.FC<ComponentProps> = ({
  children, 
  variant = 'primary', 
  style, 
  className
}) => {
  const classes = useStylesFromThemeFunction();
  const handleVariant = () => {
    switch (variant) {
      case 'primary': {
        return classes.primary;
      }
      case 'secondary': {
        return classes.secondary;
      }
      case 'primary-shadow': {
        return classes.primaryShadow;
      }
      case 'primary-outline': {
        return classes.primaryOutline;
      }
      default:
        return '';
    }
  };

  return (
    <div style={style} className={`${classes.container} ${handleVariant()} ${className}`}>
      {children}
    </div>
  );
};

export default ContainerComponent;
