import {FC} from 'react';
import {createUseStyles} from 'react-jss';
import LoadingSpinner from '../loading-spinner';
import {Colors} from '../../colors';
import React from 'react';

const useStylesFromThemeFunction = createUseStyles(() => {
  return {
    overlaySpinner: {
      '&.fixed': {
        position: 'fixed',
      },
      '&.absolute': {
        position: 'absolute',
      },
      '& > div': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: '-7px',
        marginTop: '-7px',
      },
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: Colors.white,
      zIndex: 10,
    },
  };
});
interface ComponentProps {
  fullscreen?: boolean;
}
export const OverlayLoadingSpinner: FC<ComponentProps> = ({fullscreen}) => {
  const classes = useStylesFromThemeFunction();

  return (
    <div className={`${classes.overlaySpinner}  ${fullscreen ? 'fixed' : 'absolute'} overlaySpinner`}>
      <LoadingSpinner />
    </div>
  );
};
