import React from 'react';

import './index.css'

const InfoDetails = ({ chosenOptionId, options }) => {
  const { name, species, description, imageUrl, audioUrl } = options[chosenOptionId - 1];

  return (
    <div>
      <img className="info-image" src={imageUrl} alt="" />
      <div className="info-data-container">
        <div className="info-name">{name}</div>
        <div className="latin-name">{species}</div>
        <div className="info-player">
        </div>
        {/*<Player />*/}
      </div>
      <div className="description">{description}</div>
    </div>
  )
};

export default InfoDetails;