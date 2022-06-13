import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const ErrorExclamationIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="Group_10615" data-name="Group 10615" transform="translate(-1252 -418)">
        <rect
          id="Rectangle_6867"
          data-name="Rectangle 6867"
          width="24"
          height="24"
          transform="translate(1252 418)"
          fill="rgba(255,255,255,0)"
        />
        <path
          id="error_outline_black_24dp"
          d="M11,15h2v2H11Zm0-8h2v6H11Zm.99-5A10,10,0,1,0,22,12,10,10,0,0,0,11.99,2ZM12,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          transform="translate(1252 418)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default ErrorExclamationIcon;
