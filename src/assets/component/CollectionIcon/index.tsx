import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const CollectionIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17.993" height="18.004" viewBox="0 0 17.993 18.004">
      <path
        id="Path_15135"
        data-name="Path 15135"
        d="M8132,18081.006a1,1,0,0,1-1-1v-16a1,1,0,1,1,2,0v15h15a1,1,0,0,1,0,2.008Zm3.43-4.051a1.011,1.011,0,0,1-.315-1.379l3.061-4.895a1,1,0,0,1,1.692-.012l1.215,1.883,2.61-5.012-1.477.457a1,1,0,1,1-.594-1.906l3.763-1.172a.572.572,0,0,1,.072-.027,1.128,1.128,0,0,1,.549.027l.009.008a1.493,1.493,0,0,1,.162.074.974.974,0,0,1,.441.512v.008l1.341,3.594a.97.97,0,0,1,.063.352,1,1,0,0,1-.648.934,1.008,1.008,0,0,1-1.287-.582l-.549-1.5-3.475,6.688a1.012,1.012,0,0,1-.847.531.976.976,0,0,1-.882-.457l-1.3-2.008-2.224,3.563a1.01,1.01,0,0,1-1.386.316Z"
        transform="translate(-8130.999 -18063.002)"
        fill={fill}
      />
    </svg>
  );
};

export default CollectionIcon;
