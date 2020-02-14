import React from 'react';

import './index.css'

const Stages = ({ stages }) => {

  return (
    <div className="stages">
      <ul className="stages-list">
        {stages.map((stage) => {
          return (
            <li
              key={stage.title}
              className="stage"
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
