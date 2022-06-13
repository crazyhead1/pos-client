import React from 'react';
import {Colors} from '../../../ui/common/colors';

interface ComponentProps {
  fill?: string;
}
const EnterIcon: React.FC<ComponentProps> = ({fill = Colors.purpleDark}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14.778 14">
      <path
        id="Path_17111"
        data-name="Path 17111"
        d="M18.833,7H7.944A1.945,1.945,0,0,0,6,8.944V19.056A1.945,1.945,0,0,0,7.944,21H18.833a1.945,1.945,0,0,0,1.944-1.944V8.944A1.945,1.945,0,0,0,18.833,7Zm-.389,9.722a.39.39,0,0,1-.389.389H13.937l.894.891a.392.392,0,0,1,0,.552.394.394,0,0,1-.552,0L12.724,17a.4.4,0,0,1-.082-.128.389.389,0,0,1,0-.3.4.4,0,0,1,.082-.128l1.556-1.556a.39.39,0,0,1,.552.552l-.894.891h3.729V14.778h-.778a.389.389,0,1,1,0-.778h1.167a.39.39,0,0,1,.389.389Z"
        transform="translate(-6 -7)"
        fill={fill}
      />
    </svg>
  );
};

export default EnterIcon;
