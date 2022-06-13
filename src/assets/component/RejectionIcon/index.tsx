import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const RejectionIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18.006" viewBox="0 0 17.997 18.006">
      <path
        id="Path_15136"
        data-name="Path 15136"
        d="M8132,18081.006a1,1,0,0,1-1-1v-16a1,1,0,0,1,2,0V18079h15a1,1,0,0,1,0,2Zm10.015-5.492-1.71-2.031-1.883,1.883a1.007,1.007,0,0,1-1.411,0,.994.994,0,0,1,0-1.416l2.006-2.006-1.824-2.174a1,1,0,1,1,1.534-1.283l1.71,2.037,1.874-1.879a1,1,0,0,1,1.416,1.416l-2,2,1.819,2.17a1,1,0,0,1-.127,1.406.954.954,0,0,1-.64.236A.967.967,0,0,1,8142.013,18075.514Z"
        transform="translate(-8131 -18063)"
        fill={fill}
      />
    </svg>
  );
};

export default RejectionIcon;
