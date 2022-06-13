import {Colors} from '../../colors';
import {createUseStyles} from 'react-jss';

export interface ComponentProps {
  title?: string;
  onChange?: (e: boolean) => void;
  value?: boolean;
  width?: number | string;
}

export const useStylesFromThemeFunction = createUseStyles({
  toggleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    border: `1px ${Colors.grayLight} solid`,
    alignItems: 'center',
    borderRadius: 10,
    height: '36%',
    '& .switch': {
      position: 'relative',
      display: 'inline-block',
      width: 55,
      height: 20,

      '& input': {
        opacity: 0,
        height: 0,
        width: 0,
      },
      '& .slider': {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: Colors.blueGrayLight,
        borderRadius: 50,
        transition: '0.4s',

        '&:before': {
          position: 'absolute',
          content: '""',
          height: 24,
          width: 24,
          left: 0,
          bottom: -4,
          border: `2px ${Colors.blueGrayLightDim} solid`,
          background: Colors.white,
          transition: '0.4s',
          borderRadius: 50,
        },
      },
      '& input:checked + .slider': {
        background: Colors.lightGreen,
      },
      '& input:checked + .slider:before': {
        transform: 'translateX(27px)',
        borderColor: Colors.lightGreen,
      },
    },
  },
});
