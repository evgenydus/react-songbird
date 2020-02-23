import React, { useState } from 'react';

import Header from '../Header';
import Question from '../Question';
import Screen from '../Screen';
import Stages from '../Stages';

import './index.css';
import stages from '../../birds-data';
import { getRandomNumber } from '../../helpers/utils';

const currentStageIndex = 0;
const stageOptions = stages[currentStageIndex].options;
const randomOptionIndex = getRandomNumber(stageOptions.length - 1);
const randomOption = stageOptions[randomOptionIndex];

const App = () => {
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);

  const addId = (id) => {
    setSelectedOptionIds([...selectedOptionIds, id])
  };

  const isStageCompleted = selectedOptionIds.includes(randomOption.id);

  return (
    <div className="app-container">
      <Header />
      <Stages currentStageIndex={currentStageIndex} stages={stages} />
      <Question isStageCompleted={isStageCompleted} option={randomOption} />
      <Screen
        addId={addId}
        correctAnswerId={randomOption.id}
        isStageCompleted={isStageCompleted}
        options={stageOptions}
        selectedOptionIds={selectedOptionIds}
      />
      <button
        className="button-next button-green"
        disabled={!isStageCompleted}
      >
        Следующий уровень
      </button>
    </div>
  );
};

export default App;
