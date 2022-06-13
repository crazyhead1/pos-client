import React from 'react';

interface ComponentProps {
  fill?: string;
}

const ClaimIcon: React.FC<ComponentProps> = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26">
      <g id="Group_9624" data-name="Group 9624" transform="translate(-91 -481)">
        <rect
          id="Rectangle_795"
          data-name="Rectangle 795"
          width="18"
          height="24"
          rx="3"
          transform="translate(92 482)"
          fill="rgba(255,255,255,0)"
          stroke={fill || '#222b45'}
          strokeWidth="2"
        />
        <line
          id="Line_145"
          data-name="Line 145"
          x2="5"
          transform="translate(98.5 487.5)"
          fill="none"
          stroke={fill || '#222b45'}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          id="Line_149"
          data-name="Line 149"
          x2="8"
          transform="translate(97 492)"
          fill="none"
          stroke={fill || '#222b45'}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          id="Line_523"
          data-name="Line 523"
          x2="8"
          transform="translate(97 495)"
          fill="none"
          stroke={fill || '#222b45'}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default ClaimIcon;
