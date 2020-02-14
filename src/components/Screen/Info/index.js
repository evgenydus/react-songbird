import React from 'react';
import Player from '../../Player';
import './index.css'
/*Temporary image*/
import unknownBird from '../../../assets/images/unknown-bird.jpg'

const Info = () => {

  return (
    <div className="info">
      <img className="info-image" src={unknownBird} alt="" />
      <div className="info-data-container">
        <div className="info-name">Name</div>
        <div className="latin-name">latin-name</div>
        <div className="info-player">
      </div>
        <Player />
      </div>
      <div className="description">desc</div>
    </div>
  )
};

export default Info;
