import React, { useState } from 'react';

import Header from '../Header';
import Question from '../Question';
import Screen from '../Screen';
import Stages from '../Stages';

import './index.css';
import stages from '../../birds-data';
import { getRandomNumber } from '../../helpers/utils';

let currentStageIndex = 0;
const stageOptions = stages[currentStageIndex].options;
const randomOptionIndex = getRandomNumber(stageOptions.length - 1);
const randomOption = stageOptions[randomOptionIndex];
const defaultStageScore = 5;

const App = () => {
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);
  const [stageScore, setStageScore] = useState(defaultStageScore);
  const [totalScore, setTotalScore] = useState(0);

  const addId = (id) => {
    setSelectedOptionIds([...selectedOptionIds, id])
  };

  const isStageCompleted = selectedOptionIds.includes(randomOption.id);

  const handleNextLevelClick = () => {
    if (currentStageIndex < stages.length - 1) {
      currentStageIndex += 1;
    }
  };

  return (
    <div className="app-container">
      <Header totalScore={totalScore} />
      <Stages currentStageIndex={currentStageIndex} stages={stages} />
      <Question isStageCompleted={isStageCompleted} option={randomOption} />
      <Screen
        addId={addId}
        correctAnswerId={randomOption.id}
        isStageCompleted={isStageCompleted}
        options={stageOptions}
        selectedOptionIds={selectedOptionIds}
        setStageScore={setStageScore}
        setTotalScore={setTotalScore}
        stageScore={stageScore}
      />
      <button
        className="button-next button-green"
        disabled={!isStageCompleted}
        onClick={handleNextLevelClick}
      >
        Следующий уровень
      </button>
    </div>
  );
};

export default App;
