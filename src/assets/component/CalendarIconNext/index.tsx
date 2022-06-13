import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}

const CalendarIconNext: React.FC<ComponentProps> = ({fill = Colors.purple}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10">
      <path
        id="Polygon_16"
        data-name="Polygon 16"
        d="M4.152,1.357a1,1,0,0,1,1.7,0l3.2,5.113A1,1,0,0,1,8.2,8H1.8A1,1,0,0,1,.956,6.47Z"
        transform="translate(8) rotate(90)"
        fill={fill}
      />
    </svg>
  );
};

export default CalendarIconNext;
