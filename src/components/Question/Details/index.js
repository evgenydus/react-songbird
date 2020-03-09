import React from 'react';

import Player from '../../Player';

import './index.css'

const hiddenName = '******';

const Details = ({ isStageCompleted, option }) => {
  return (
    <div className="question-details">
      <div className="details-answer">
        {isStageCompleted ? option.name : hiddenName}
      </div>
      <div className="details-player">
        <Player audioUrl={option.audioUrl}/>
      </div>
    </div>
  )
};

export default Details;
