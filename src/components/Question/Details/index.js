import React from 'react';

import Player from '../../Player';

import './index.css'

const Details = ({ birdData }) => { //TODO: Why cant do this way { birdData: { name, audio } }?
  return (
    <div className="question-details">
      <div className="details-answer">{birdData.name}</div>
      <div className="details-player">
        <Player />
      </div>
    </div>
  )
};

export default Details;