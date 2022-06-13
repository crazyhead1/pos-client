import React from 'react';

interface ComponentProps {
  fill?: string;
}

const CloseIcon: React.FC<ComponentProps> = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="9.382" height="9.382" viewBox="0 0 9.382 9.382">
      <g id="_27_Icon_chevron-down" data-name="27) Icon/chevron-down" transform="translate(-1.863 4.691) rotate(-45)">
        <g id="Group_7262" data-name="Group 7262" transform="translate(0 0)">
          <line
            id="Line_296"
            data-name="Line 296"
            x2="9.268"
            transform="translate(0 4.634)"
            fill="none"
            stroke={fill || '#222b45'}
            strokeLinecap="round"
            strokeWidth="2"
          />
          <line
            id="Line_297"
            data-name="Line 297"
            x2="9.268"
            transform="translate(4.634 0) rotate(90)"
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

export default CloseIcon;
