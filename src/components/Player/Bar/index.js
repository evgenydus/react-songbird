import React, { useCallback } from 'react';

import './index.css';

const Bar = ({ currentTime, duration, onTimeUpdate }) => {
  const currentPercentage = (currentTime / duration) * 100;

  const handleTimeDrag = useCallback((event) => {
      const calcClickedTime = (event) => {
        const clickPositionInPage = event.pageX;
        const bar = document.getElementById('bar-progress');
        const barStart = bar.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = duration / barWidth;
        return timePerPixel * clickPositionInBar;
      };

      onTimeUpdate(calcClickedTime(event));

      const updateTimeOnMove = event => {
        onTimeUpdate(calcClickedTime(event));
      };

      document.addEventListener('mousemove', updateTimeOnMove);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', updateTimeOnMove);
      });

      document.removeEventListener('mouseup', () => {
        document.removeEventListener('mousemove', updateTimeOnMove);
      });
    },
    [onTimeUpdate, duration],
  );

  return (
    <div className="bar">
      <div
        className="bar-progress"
        id="bar-progress"
        style={{
          background: `linear-gradient(to right, #F2A960 ${currentPercentage}%, white 0)`
        }}
        onMouseDown={handleTimeDrag}
      >
        <span
          className="knob"
          style={{left: `${currentPercentage}%`}}
        />
      </div>
    </div>
  )
};

export default Bar;
