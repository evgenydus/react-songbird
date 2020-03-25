import React from 'react';

import './index.css';

const Bar = ({currentTime, duration, onTimeUpdate}) => {
  const currentPercentage = (currentTime / duration) * 100;

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const bar = document.getElementById('bar-progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleTimeDrag = (e) => {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  };

  return (
    <div className="bar">
      <div
        className="bar-progress"
        id="bar-progress"
        style={{
          background: `linear-gradient(to right, #F2A960 ${currentPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
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
