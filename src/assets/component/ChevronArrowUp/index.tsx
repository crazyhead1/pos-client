import React from 'react';

interface ComponentProps {
  fill?: string;
  className?: string;
}

const ChevronArrowUp: React.FC<ComponentProps> = ({fill = '#222b45', className}) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="21.999" 
        height="21.999" 
        viewBox="0 0 21.999 21.999"
    >
    <g transform="translate(24.499 -2.5) rotate(90)">
        <g className="a">
            <path className="c" d="M22.5,13.5a9,9,0,1,0-9,9A9,9,0,0,0,22.5,13.5Z"/>
            <path className="d"
                d="M 13.49951171875 22.49902153015137 C 18.46791076660156 22.49902153015137 22.49902153015137 18.46791076660156 22.49902153015137 13.49951171875 C 22.49902153015137 8.531111717224121 18.46791076660156 4.500001907348633 13.49951171875 4.500001907348633 C 8.531111717224121 4.500001907348633 4.500001907348633 8.531111717224121 4.500001907348633 13.49951171875 C 4.500001907348633 18.46791076660156 8.531111717224121 22.49902153015137 13.49951171875 22.49902153015137 M 13.49951171875 24.49902153015137 C 7.434361934661865 24.49902153015137 2.500001668930054 19.56466102600098 2.500001668930054 13.49951171875 C 2.500001668930054 7.434361934661865 7.434361934661865 2.500001668930054 13.49951171875 2.500001668930054 C 19.56466102600098 2.500001668930054 24.49902153015137 7.434361934661865 24.49902153015137 13.49951171875 C 24.49902153015137 19.56466102600098 19.56466102600098 24.49902153015137 13.49951171875 24.49902153015137 Z"/>
        </g>
        <path className="b" d="M0,10.1l2.442,2.785A42.032,42.032,0,0,1,5.7,9.523,27.76,27.76,0,0,1,9.055,7.033"
            transform="translate(4.026 17.866) rotate(-90)"/>
    </g>
    </svg>
  );
};

export default ChevronArrowUp;
