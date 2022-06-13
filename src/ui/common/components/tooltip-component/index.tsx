import React from 'react';
import {useStylesFromThemeFunction} from './TooltipComponent';

interface ComponentProps {
  icon?: string;
  title?: string;
  requirements?: string[];
  tooltipClass?: string;
  tooltipArrowClass?: string;
  contentClass?: string;
  value?: string;
  description?: string;
}

const TooltipComponent: React.FC<ComponentProps> = ({
  icon,
  requirements,
  title = 'Requirements',
  tooltipClass,
  tooltipArrowClass,
  contentClass,
  value,
  description,
}) => {
  const classes = useStylesFromThemeFunction();
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className={tooltipClass || classes.tooltipContainer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {value ? <p>{value}</p> : <img src={icon} alt="tooltip icon" />}
      {hover && (
        <>
          <div className={`${contentClass} ${classes.contentContainer}`}>
            <p>{description}</p>
            <h3>{title}:</h3>
            <ul>{requirements && requirements.map((req, index) => <li key={index}>{req}</li>)}</ul>
          </div>
          <div className={`${tooltipArrowClass} ${classes.tooltipArrow}`} />
        </>
      )}
    </div>
  );
};

export default TooltipComponent;
