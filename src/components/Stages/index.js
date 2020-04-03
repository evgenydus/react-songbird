import React from 'react';

import './index.css'

const Stages = ({ currentStageIndex, stages }) => {

  return (
    <div className="stages">
      <ul className="stages-list">
        {stages.map((stage, index) => {
          return (
            <li
              key={stage.title}
              className={index === currentStageIndex ? 'current-stage' : 'stage'}
              // TODO: Is this the right way to add className?
            >
              {stage.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Stages;
