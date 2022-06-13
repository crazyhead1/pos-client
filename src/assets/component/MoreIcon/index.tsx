import React from 'react';

interface ComponentProps {
  fill?: string;
}

const MoreIcon: React.FC<ComponentProps> = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <g
        id="_5_Checkbox_1_Checked_1_Default"
        data-name="5) Checkbox/1) Checked/1) Default"
        transform="translate(20 2) rotate(90)"
      >
        <g id="_Color" data-name="🎨 Color" fill="none" stroke={fill || '#222b45'} strokeWidth="2">
          <rect width="18" height="18" rx="9" stroke="none" />
          <rect x="-1" y="-1" width="20" height="20" rx="10" fill="none" />
        </g>
        <g id="Group_982" data-name="Group 982" transform="translate(9 5.127)">
          <line
            id="Line_215"
            data-name="Line 215"
            transform="translate(0 3.873)"
            fill="none"
            stroke={fill || '#222b45'}
            strokeLinecap="round"
            strokeWidth="2"
          />
          <line
            id="Line_217"
            data-name="Line 217"
            transform="translate(0 0)"
            fill="none"
            stroke={fill || '#222b45'}
            strokeLinecap="round"
            strokeWidth="2"
          />
          <line
            id="Line_470"
            data-name="Line 470"
            transform="translate(0 7.873)"
            fill="none"
            stroke={fill || '#222b45'}
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};

export default MoreIcon;
