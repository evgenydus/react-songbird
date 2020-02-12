import React from 'react';
import Player from '../../Player';
import './index.css'

const Details = () => {
  return (
    <div className="question-details">
      <div className="details-answer">Ворон</div>
      <div className="details-player">
        <Player />
      </div>
    </div>
  )
};

export default Details;