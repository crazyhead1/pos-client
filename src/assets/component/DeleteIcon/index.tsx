import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const DeleteIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
      <path
        id="Path_15124"
        data-name="Path 15124"
        d="M8143.131,18076.672l-5.152-5.307-5.135,5.107a1.059,1.059,0,0,1-.754.316,1.087,1.087,0,0,1-.783-.34,1.148,1.148,0,0,1-.307-.8,1.126,1.126,0,0,1,.332-.785l4.9-4.867-4.888-4.861a1.143,1.143,0,0,1-.024-1.584,1.083,1.083,0,0,1,.783-.344,1.06,1.06,0,0,1,.755.316l5.138,5.109,5.148-5.3a1.054,1.054,0,0,1,.769-.33,1.068,1.068,0,0,1,.772.33,1.147,1.147,0,0,1,0,1.584l-4.946,5.094,4.935,5.08a1.149,1.149,0,0,1,0,1.586,1.079,1.079,0,0,1-.772.326A1.06,1.06,0,0,1,8143.131,18076.672Z"
        transform="translate(-8131 -18062.998)"
        fill={fill}
      />
    </svg>
  );
};

export default DeleteIcon;
