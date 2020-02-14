import React from 'react';
import './index.css'

const Player = ({ audioUrl }) => {
  return (
    <div className="player-container">
      {/*TODO: Temporary player*/}
      <audio className="player" src={audioUrl} controls />
    </div>
  )
};

export default Player;
