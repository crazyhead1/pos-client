import React from 'react';

const SearchIcon: React.FC<{fill?: string}> = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20.843" height="20.843" viewBox="0 0 20.843 20.843">
      <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(1 1)">
        <path
          id="Path_458"
          data-name="Path 458"
          d="M20.881,12.69A8.19,8.19,0,1,1,12.69,4.5a8.19,8.19,0,0,1,8.19,8.19Z"
          transform="translate(-4.5 -4.5)"
          fill="none"
          stroke={fill || '#222b45'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_459"
          data-name="Path 459"
          d="M29.429,29.429l-4.454-4.454"
          transform="translate(-11 -11)"
          fill="none"
          stroke={fill || '#222b45'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
