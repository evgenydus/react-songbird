import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Play = ({ handleClick }) => {

  return (
    <div className="player-button" onClick={() => handleClick()}>
      <FontAwesomeIcon icon={faPlayCircle} />
    </div>
  )
};

export default Play;
