import React from 'react';

import { PlayCircleFilled } from "@material-ui/icons";

const Play = ({ handleClick }) => {

  return (
    <div className="player-button" onClick={() => handleClick()}>
      <PlayCircleFilled />
    </div>
  )
};

export default Play;
