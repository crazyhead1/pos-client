import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const AgeingIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18" viewBox="0 0 17.997 18">
      <path
        id="Path_15134"
        data-name="Path 15134"
        d="M8132,18081a1,1,0,0,1-1-1v-16a1,1,0,0,1,2,0v15h15a1,1,0,0,1,0,2Zm12.5-9a1,1,0,1,1,1,1A1,1,0,0,1,8144.5,18072Zm-3,0a1,1,0,1,1,1,1A1,1,0,0,1,8141.5,18072Zm-5,1a1,1,0,0,1,0-2h3a1,1,0,1,1,0,2Z"
        transform="translate(-8131 -18063)"
        fill={fill}
      />
    </svg>
  );
};

export default AgeingIcon;
