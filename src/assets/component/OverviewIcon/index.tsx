import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const OverviewIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18" viewBox="0 0 17.997 18">
      <path
        id="Path_15133"
        data-name="Path 15133"
        d="M8132,18081a1,1,0,0,1-1-1v-16a1,1,0,0,1,2,0v15h15a1,1,0,0,1,0,2Zm11.367-5.5v-2.5a1,1,0,0,1,2,0v2.5a1,1,0,1,1-2,0Zm-4,0v-7.5a1,1,0,0,1,2,0v7.5a1,1,0,1,1-2,0Zm-4,0V18071a1,1,0,1,1,2,0v4.494a1,1,0,1,1-2,0Z"
        transform="translate(-8131 -18063)"
        fill={fill}
      />
    </svg>
  );
};

export default OverviewIcon;
