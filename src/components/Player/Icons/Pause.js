import React from 'react';

import { PauseCircleFilled } from "@material-ui/icons";

const Pause = ({ handleClick }) => {

  return (
    <div className="player-button" onClick={() => handleClick()}>
      <PauseCircleFilled />
    </div>
  )
};

export default Pause;
