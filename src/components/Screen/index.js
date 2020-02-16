import React from 'react';

import Info from './Info';
import Options from './Options';

import './index.css'

const Screen = ({ chosenOptionId, options, setChosenOptionId }) => {

  return (
    <div className="screen">
      <Options options={options} setChosenOptionId={setChosenOptionId} />
      <Info chosenOptionId={chosenOptionId} options={options} />
    </div>
  )
};

export default Screen;
