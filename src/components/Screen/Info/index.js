import React from 'react';

import InfoDetails from './InfoDetails/InfoDetails';
import Player from '../../Player';

import './index.css'

const Info = ({ selectedOptionId, options }) => {
  const selectedOption = options.find(option => option.id === selectedOptionId) || {};

  return (
    <div className="info">
      {selectedOptionId ? (
        <InfoDetails selectedOption={selectedOption} />
      ) : (
        <p className="info-placeholder">
          Прослушайте аудио и выберите птицу, которая поет на записи
        </p>
      )}
    </div>
  )
};

export default Info;
