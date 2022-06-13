import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}

const PasswordEye: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
      <path
        fill={fill}
        id="Path_15097"
        data-name="Path 15097"
        d="M7908.277,17830.3a1.3,1.3,0,0,1,0-1.607c.86-1.1,4.054-4.693,8.722-4.693s7.862,3.594,8.722,4.693a1.3,1.3,0,0,1,0,1.607c-.86,1.1-4.053,4.7-8.722,4.7S7909.137,17831.4,7908.277,17830.3Zm1.475-.8c.983,1.186,3.645,3.8,7.247,3.8s6.265-2.619,7.248-3.8c-.983-1.187-3.645-3.807-7.248-3.807S7910.734,17828.313,7909.751,17829.5Zm4.792,0a2.457,2.457,0,1,1,2.456,2.535A2.5,2.5,0,0,1,7914.543,17829.5Z"
        transform="translate(-7907.999 -17824.002)"
      />
    </svg>
  );
};

export default PasswordEye;
