import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const ClinicianIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15.497" height="18" viewBox="0 0 15.497 18">
      <path
        id="Path_15092"
        data-name="Path 15092"
        d="M1.877,12.752V9.093a2.745,2.745,0,1,1,1.737,0v3.659a3.51,3.51,0,0,0,7.019,0V9.144a3.989,3.989,0,0,1-3.128-3.9v-5A.243.243,0,0,1,7.749,0H9.56A.846.846,0,0,1,10.5.849a.846.846,0,0,1-.935.888H9.243v3.51a2.259,2.259,0,0,0,4.518,0V1.737H13.5a.861.861,0,0,1-.869-.888A.85.85,0,0,1,13.5,0h1.758A.242.242,0,0,1,15.5.243v5a3.989,3.989,0,0,1-3.127,3.9v3.609a5.247,5.247,0,1,1-10.494,0ZM1.737,6.5A1.008,1.008,0,1,0,2.745,5.49,1.01,1.01,0,0,0,1.737,6.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default ClinicianIcon;
