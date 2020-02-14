import React from 'react';

import './index.css'

const Stages = ({ currentStage, stages }) => {

  const showCurrentStage = () => {
    return(
      stages.map((stage, index) => {
        if (index === currentStage) {
          return (
            <li className="current-stage" key={index}>{stage}</li>
          )
        } else {
          return (
            <li className="stage" key={index}>{stage}</li>
          )
        }
      })
    )
  };

  return (
    <div className="stages">
      <ul className="stages-list">
        {showCurrentStage()}
      </ul>
    </div>
  )
};

export default Stages;
