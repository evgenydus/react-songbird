import React, { useState } from 'react';

import Info from './Info';
import Options from './Options';

import './index.css'

const Screen = ({ options }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  return (
    <div className="screen">
      <Options options={options} onOptionClick={setSelectedOptionId} />
      <Info options={options} selectedOptionId={selectedOptionId}/>
    </div>
  )
};

export default Screen;
