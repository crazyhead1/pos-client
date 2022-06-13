import React from 'react';

interface ComponentProps {
  fill?: string;
}

const SuspendIcon: React.FC<ComponentProps> = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="31.113" height="31.113" viewBox="0 0 31.113 31.113">
      <g
        id="_5_Checkbox_1_Checked_1_Default"
        data-name="5) Checkbox/1) Checked/1) Default"
        transform="translate(15.556 2.828) rotate(45)"
      >
        <g id="_Color" data-name="🎨 Color" fill="none" stroke={fill || '#222b45'} strokeWidth="2">
          <rect width="18" height="18" rx="9" stroke="none" />
          <rect x="-1" y="-1" width="20" height="20" rx="10" fill="none" />
        </g>
        <g id="Group_982" data-name="Group 982" transform="translate(4.314 9.314) rotate(-90)">
          <line
            id="Line_215"
            data-name="Line 215"
            y1="9"
            transform="translate(0 0.373)"
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
        </g>
      </g>
    </svg>
  );
};

export default SuspendIcon;
