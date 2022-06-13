import React from 'react';
import {FC} from 'react';
import {createUseStyles} from 'react-jss';
import {OverlayLoadingSpinner} from '../overlay-loading-spinner';

const useStylesFromThemeFunction = createUseStyles(() => {
  return {
    body: {
      display: 'block',
      paddingBottom: 30,
      position: 'relative',
      '& .overlaySpinner > div': {
        top: `calc(50% - 40px)`,
      },
    },
    card: {
      alignItems: 'center',
      background: 'white',
      borderRadius: 10,
      display: 'inline-block',
      marginBottom: 45,
      width: '100%',
    },
    header: {
      width: 'calc(100% - 60px)',
      display: 'inline-block',
      marginBottom: 20,
      padding: '30px 30px 0',
    },
    title: {
      display: 'inline-block',
      fontSize: '20px',
      fontWeight: 700,
      width: '100%',
      float: 'left',
      '@media (min-width: 1280px)': {
        width: 'auto',
      },
    },
    tools: {
      display: 'inline-block',
      fontSize: 18,
      width: '100%',
      float: 'left',
      '& .toolsWrapper': {
        textAlign: 'left',
        padding: '0 !important',
      },
      '& .toolsWrapper > *': {
        display: 'inline-block',
        marginLeft: 0,
        marginRight: 5,
        marginTop: 10,
        verticalAlign: 'top',
      },
      '& .toolsWrapper .ddButtonCont': {
        height: 'auto',
      },
      '& .toolsWrapper .dashDLBtn button': {
        padding: '7px 10px',
      },
      '& .toolsWrapper .dropCont': {
        height: 29,
        '& > div > div': {
          paddingTop: 6,
          paddingBottom: 6,
        },
      },
      '@media (min-width: 1280px)': {
        width: 'auto',
        display: 'inline-block',
        float: 'right',
        '& .toolsWrapper': {
          textAlign: 'right',
          '& > *': {
            marginTop: 0,
          },
        },
      },
    },
  };
});

interface ComponentProps {
  children?: JSX.Element[] | JSX.Element;
  title?: string;
  height?: number | string;
  minHeight?: number | string;
  tools?: JSX.Element[] | JSX.Element | string;
  showLoading?: boolean;
}

export const Card: FC<ComponentProps> = ({children, title, tools, height, minHeight, showLoading}) => {
  const classes = useStylesFromThemeFunction();

  return (
    <div className={classes.card} style={{height, minHeight}}>
      {(title || tools) && (
        <div className={classes.header}>
          <div className={classes.title}>{title}</div>
          <div className={classes.tools}>{tools}</div>
        </div>
      )}
      {children && (
        <div className={classes.body}>
          {showLoading && <OverlayLoadingSpinner />}
          {children}
        </div>
      )}
    </div>
  );
};
