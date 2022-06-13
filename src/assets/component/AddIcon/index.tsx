import React from 'react';

interface ComponentProps {
  fill?: string;
}

const AddIcon: React.FC<ComponentProps> = ({fill}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="23"
      height="23"
      viewBox="0 0 23 23"
    >
      <defs>
        <clipPath id="clip-path">
          <rect width="13.551" height="13.551" fill="none" />
        </clipPath>
      </defs>
      <g id="Group_7283" data-name="Group 7283" transform="translate(1 1)">
        <g id="Group_12396" data-name="Group 12396">
          <path
            id="Path_12105"
            data-name="Path 12105"
            d="M10.5,0A10.5,10.5,0,1,1,0,10.5,10.5,10.5,0,0,1,10.5,0Z"
            fill="rgba(255,255,255,0)"
            stroke={fill || '#222b45'}
            strokeWidth="2"
          />
          <g
            id="Repeat_Grid_14"
            data-name="Repeat Grid 14"
            transform="translate(3.859 3.727)"
            clipPath="url(#clip-path)"
          >
            <g transform="translate(-3.861 -3.727)">
              <g id="Group_7284" data-name="Group 7284" transform="translate(10.637 5.727) rotate(45)">
                <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(0)">
                  <path
                    id="Path_459"
                    data-name="Path 459"
                    d="M6.754,6.754,0,0"
                    fill="none"
                    stroke={fill || '#222b45'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
                <g id="Icon_feather-search-2" data-name="Icon feather-search" transform="translate(6.754) rotate(90)">
                  <path
                    id="Path_459-2"
                    data-name="Path 459"
                    d="M6.754,6.754,0,0"
                    fill="none"
                    stroke={fill || '#222b45'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default AddIcon;
