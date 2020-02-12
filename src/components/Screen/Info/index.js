import React from 'react';
import Player from '../../Player';

const Info = () => {
  return (
    <div className="info">
      <div className="info-image">image</div>
      <div className="info-name">name</div>
      <div className="latin-name">latin-name</div>
      <div className="info-player">
        <Player />
      </div>
      <div className="description">desc</div>
    </div>
  )
};

export default Info;
