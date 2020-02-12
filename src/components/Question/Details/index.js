import React from 'react';
import Player from '../../Player';

const Details = () => {
  return (
    <div className="question-details">
      <div className="details-answer">Answer</div>
      <div className="details-player">
        <Player />
      </div>
    </div>
  )
};

export default Details;