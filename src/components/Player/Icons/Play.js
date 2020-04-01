import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Play = ({ onClick }) => {

  return (
    <div className="player-button" onClick={onClick}>
      <FontAwesomeIcon icon={faPlayCircle} />
    </div>
  )
};

export default Play;
