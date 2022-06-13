import React from 'react';
import {Colors} from 'modules/Common/constants/Colors';

interface ComponentProps {
  fill?: string;
}

const PasswordEyeSlashed: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14">
      <path
        id="Path_15096"
        data-name="Path 15096"
        d="M7875.081,17822.809a.844.844,0,0,1-.654-.314l-12.85-12.422a.77.77,0,0,1,.075-1.031.844.844,0,0,1,1.074-.074l2.371,2.256a9.747,9.747,0,0,1,3.481-.639,10.487,10.487,0,0,1,5.785,1.813,13.56,13.56,0,0,1,2.929,2.582,1.162,1.162,0,0,1,0,1.5,12.931,12.931,0,0,1-3.641,3.006l1.923,1.895a.787.787,0,0,1,.311.8.8.8,0,0,1-.626.6A.839.839,0,0,1,7875.081,17822.809Zm-6.5-9.455a2.418,2.418,0,0,1,2.457,2.373,2.255,2.255,0,0,1-.25,1.029l1.637,1.582a11.969,11.969,0,0,0,3.4-2.611c-.745-.832-3.463-3.561-7.241-3.561a8.115,8.115,0,0,0-2.21.322l1.142,1.1A2.552,2.552,0,0,1,7868.578,17813.354Zm-.084,7.043a.816.816,0,0,1-.49-.158l-6.14-5.934a.769.769,0,0,1,.075-1.031.821.821,0,0,1,.579-.232.837.837,0,0,1,.489.158l6.14,5.928a.774.774,0,0,1-.075,1.039A.843.843,0,0,1,7868.494,17820.4Zm-5.321-1.187a.816.816,0,0,1-.49-.158l-2.866-2.768a.737.737,0,0,1,0-1.105.783.783,0,0,1,.574-.244.8.8,0,0,1,.575.244l2.865,2.768a.771.771,0,0,1-.08,1.033A.829.829,0,0,1,7863.173,17819.209Z"
        transform="translate(-7859.568 -17808.809)"
        fill={fill}
      />
    </svg>
  );
};

export default PasswordEyeSlashed;
