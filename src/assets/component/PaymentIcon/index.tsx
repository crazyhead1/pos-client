import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const PaymentIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18" viewBox="0 0 17.997 18">
      <path
        id="Path_15137"
        data-name="Path 15137"
        d="M8132,18081a1,1,0,0,1-1-1v-16a1,1,0,1,1,2,0v15h15a1,1,0,1,1,0,2Zm7.746-6.066v-.322h-.644a.964.964,0,1,1,0-1.928h1.928a.322.322,0,0,0,0-.645h-.644a2.25,2.25,0,0,1-2.251-2.25,2.18,2.18,0,0,1,1.611-2.119v-.455a.964.964,0,0,1,1.929,0v.322h.645a.967.967,0,0,1,0,1.934h-1.933a.319.319,0,1,0,0,.639h.644a2.251,2.251,0,0,1,2.251,2.252,2.188,2.188,0,0,1-1.606,2.123v.449a.964.964,0,1,1-1.929,0Z"
        transform="translate(-8131.001 -18062.998)"
        fill={fill}
      />
    </svg>
  );
};

export default PaymentIcon;
