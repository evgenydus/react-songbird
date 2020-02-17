import React from 'react';

import './index.css'

const InfoDetails = ({ selectedOption }) => {
  const { name, species, description, imageUrl } = selectedOption;

  return (
    <div>
      <img className="info-image" src={imageUrl} alt="" />
      <div className="info-data-container">
        <div className="info-name">{name}</div>
        <div className="latin-name">{species}</div>
        <div className="info-player">
        </div>
        {/*TODO: Implement component <Player />*/}
      </div>
      <div className="description">{description}</div>
    </div>
  )
};

export default InfoDetails;
