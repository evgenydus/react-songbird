import React from 'react';
import './index.css'

const Stages = (props) => {

  const showCurrentStage = () => {
    return(
      props.stages.map((stage, index) => {
        if (index === props.currentStage) {
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
