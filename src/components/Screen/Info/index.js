import React from 'react';

import InfoDetails from './InfoDetails/InfoDetails';

import './index.css'

const Info = ({ selectedOption }) => {

  return (
    <div className="info">
      {selectedOption ? (
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
