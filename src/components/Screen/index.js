import React, { useState } from 'react';

import Info from './Info';
import Options from './Options';

import './index.css'

const Screen = ({
  addId,
  correctAnswerId,
  isStageCompleted,
  options,
  selectedOptionIds,
  setStageScore,
  setTotalScore,
  stageScore,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const selectedOption = options.find(option => option.id === selectedOptionId);

  return (
    <div className="screen">
      <Options
        addId={addId}
        correctAnswerId={correctAnswerId}
        isStageCompleted={isStageCompleted}
        onOptionClick={setSelectedOptionId}
        options={options}
        selectedOptionIds={selectedOptionIds}
        setStageScore={setStageScore}
        setTotalScore={setTotalScore}
        stageScore={stageScore}
      />
      <Info selectedOption={selectedOption} />
    </div>
  )
};

export default Screen;
