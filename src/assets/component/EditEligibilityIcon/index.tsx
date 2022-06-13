import React from 'react';

const EditEligibilityIcon: React.FC<{fill?: string}> = ({fill}) => {
  return (
    <div style={{padding: 2, display: 'flex', alignItems: 'center'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.999 21.999">
        <g id="Group_12398" data-name="Group 12398" transform="translate(-1763.001 -409)">
          <g id="arrow-up-circle-outline" transform="translate(1787.5 406.5) rotate(90)">
            <path
              id="Path_1628"
              data-name="Path 1628"
              d="M12.375,15.674l3.75-3.721,3.75,3.72"
              transform="translate(-2.625 -2.485)"
              fill="none"
              stroke={fill || '#6135fb'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_1629"
              data-name="Path 1629"
              d="M18,12.729v7.545"
              transform="translate(-4.5 -2.743)"
              fill="none"
              stroke={fill || '#6135fb'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <g id="Path_1630" data-name="Path 1630" fill="none" strokeMiterlimit="10">
              <path d="M22.5,13.5a9,9,0,1,0-9,9A9,9,0,0,0,22.5,13.5Z" stroke="none" />
              <path
                d="M 13.49951171875 22.49902153015137 C 18.46791076660156 22.49902153015137 22.49902153015137 18.46791076660156 22.49902153015137 13.49951171875 C 22.49902153015137 8.531111717224121 18.46791076660156 4.500001907348633 13.49951171875 4.500001907348633 C 8.531111717224121 4.500001907348633 4.500001907348633 8.531111717224121 4.500001907348633 13.49951171875 C 4.500001907348633 18.46791076660156 8.531111717224121 22.49902153015137 13.49951171875 22.49902153015137 M 13.49951171875 24.49902153015137 C 7.434361934661865 24.49902153015137 2.500001668930054 19.56466102600098 2.500001668930054 13.49951171875 C 2.500001668930054 7.434361934661865 7.434361934661865 2.500001668930054 13.49951171875 2.500001668930054 C 19.56466102600098 2.500001668930054 24.49902153015137 7.434361934661865 24.49902153015137 13.49951171875 C 24.49902153015137 19.56466102600098 19.56466102600098 24.49902153015137 13.49951171875 24.49902153015137 Z"
                stroke="none"
                fill={fill || '#6135fb'}
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default EditEligibilityIcon;
