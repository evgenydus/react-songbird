import React from 'react';

import InfoDetails from './InfoDetails/InfoDetails';
import Player from '../../Player';

import './index.css'


const Info = ({ chosenOptionId, options }) => {

  return (
    <div className="info">
      {chosenOptionId > 0 ? (
        <InfoDetails chosenOptionId={chosenOptionId} options={options} />
      ) : (
        <p className="info-placeholder">
          Прослушайте аудио и выберите птицу, которая поет на записи
        </p>
      )}
    </div>
  )
};

export default Info;
