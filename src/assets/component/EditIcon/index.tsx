import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const EditIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.006" viewBox="0 0 18 18.006">
      <path
        id="Path_15113"
        data-name="Path 15113"
        d="M8135.529,18081.3h-3.319a.912.912,0,0,1-.908-.914v-3.318a.926.926,0,0,1,.271-.643l12.854-12.85a.861.861,0,0,1,1.273,0l3.318,3.314,0,0a.876.876,0,0,1,0,1.279l-7.278,7.279-1.237,1.189-4.338,4.381a.93.93,0,0,1-.637.277Zm7.066-13.3-9.43,9.424-.042.047v2h2l9.364-9.363.106-.111-1.888-1.895Zm2.469-2.512-1.089,1.127-.106.105,1.9,1.9.106.107,1.121-1.086.111-.111-1.929-1.928Z"
        transform="translate(-8131.301 -18063.299)"
        fill={fill}
      />
    </svg>
  );
};

export default EditIcon;
