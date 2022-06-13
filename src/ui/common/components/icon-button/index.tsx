import React from 'react';
import {createUseStyles} from 'react-jss';
import {ThemeInterface} from '../../../../interfaces/theme';

interface ComponentProps {
  children: JSX.Element[] | JSX.Element;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  type?: 'button' | 'submit';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    default: {
      background: 'none',
      border: 'none',
      '&:hover': {
        cursor: 'pointer',
      },
      margin: 0,
      padding: 0,
      overflow: 'visible',
      outline: 'none',
      fontFamily: 'Poppins',
    },
  };
});

const IconButton: React.FC<ComponentProps> = ({
  children,
  onClick,
  style,
  className,
  type = 'button',
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };
  const classes = useStylesFromThemeFunction();
  return (
    <button
      onClick={handleClick}
      className={` ${className} ${!className && classes.default}`}
      style={style}
      type={type}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default IconButton;
