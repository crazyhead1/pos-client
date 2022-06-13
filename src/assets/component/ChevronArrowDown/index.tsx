import React from 'react';

interface ComponentProps {
  fill?: string;
  className?: string;
}

const ChevronArrowDown: React.FC<ComponentProps> = ({fill = '#222b45', className}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{maxWidth: '12'}}
      viewBox="0 0 9.687 5.878"
    >
      <path
        id="chevron-left"
        d="M2.089,7.115,6.4,2.8a.532.532,0,0,1,.753,0l.5.5a.533.533,0,0,1,0,.752L4.24,7.491l3.416,3.433a.532.532,0,0,1,0,.752l-.5.5a.532.532,0,0,1-.753,0L2.089,7.867a.532.532,0,0,1,0-.753Z"
        transform="translate(-2.648 7.811) rotate(-90)"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronArrowDown;
