import React from 'react';

import Info from './Info';
import Options from './Options';

import './index.css'

const Screen = ({
  addId,
  correctAnswerId,
  isStageCompleted,
  options,
  selectedOption,
  selectedOptionIds,
  setSelectedOptionId,
  setStageScore,
  setTotalScore,
  stageScore,
}) => {

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
