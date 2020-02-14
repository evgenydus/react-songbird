import React from 'react';
import './index.css'

const Player = () => {
  return (
    <div className="player-container">
      {/*TODO: Temporary player*/}
      <audio className="player" src="https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3" controls>audio</audio>
    </div>
  )
};

export default Player;
