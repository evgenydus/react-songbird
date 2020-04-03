import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'

const Pause = ({ onClick }) => {

  return (
    <div className="player-button" onClick={onClick}>
      <FontAwesomeIcon icon={faPauseCircle} />
    </div>
  )
};

export default Pause;
