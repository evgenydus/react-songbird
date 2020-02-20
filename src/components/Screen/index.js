import React, { useState } from 'react';

import Info from './Info';
import Options from './Options';

import './index.css'

const Screen = ({ addId, isCorrectAnswer, options, selectedOptionIds }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const selectedOption = options.find(option => option.id === selectedOptionId);

  return (
    <div className="screen">
      <Options
        addId={addId}
        isCorrectAnswer={isCorrectAnswer}
        onOptionClick={setSelectedOptionId}
        options={options}
        selectedOptionIds={selectedOptionIds}
      />
      <Info selectedOption={selectedOption} />
    </div>
  )
};

export default Screen;
