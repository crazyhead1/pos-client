import React from 'react';

interface ComponentProps {
  fill?: string;
}

const PaIcon: React.FC<ComponentProps> = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25.649" height="26" viewBox="0 0 25.649 26">
      <g id="Group_7569" data-name="Group 7569" transform="translate(-91 -481)">
        <rect
          id="Rectangle_795"
          data-name="Rectangle 795"
          width="18"
          height="24"
          rx="3"
          transform="translate(92 482)"
          fill="rgba(255,255,255,0)"
          stroke={fill || '#222b45'}
          strokeLinejoin="round"
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
        <g id="Group_7572" data-name="Group 7572" transform="translate(99.219 492)">
          <path
            id="Path_12095"
            data-name="Path 12095"
            d="M0,11.768l3.744,4.27a60.32,60.32,0,0,1,4.694-4.771,44.216,44.216,0,0,1,4.848-3.694"
            transform="translate(0 -7.072)"
            fill="none"
            stroke="#faf9fb"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <path
            id="Path_12094"
            data-name="Path 12094"
            d="M0,11.729,3.744,16a64.445,64.445,0,0,1,5-5.149,42.563,42.563,0,0,1,5.141-3.817"
            transform="translate(0 -7.033)"
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

export default PaIcon;
