import React from 'react';

import './index.css'
import Player from '../../../Player';

const InfoDetails = ({ selectedOption }) => {
  const { name, species, description, imageUrl, audioUrl } = selectedOption;

  return (
    <div>
      <img className="info-image" src={imageUrl} alt="" />
      <div className="info-data-container">
        <div className="info-name">{name}</div>
        <div className="latin-name">{species}</div>
        <div className="info-player">
          <Player audioUrl={audioUrl}/>
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  )
};

export default InfoDetails;
