import React from 'react';
import Player from '../../Player';
import './index.css'

const Details = (props) => {
  return (
    <div className="question-details">
      <div className="details-answer">{props.birdData.name}</div>
      <div className="details-player">
        <Player />
      </div>
    </div>
  )
};

export default Details;