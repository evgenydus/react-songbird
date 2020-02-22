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

  const isCorrectAnswer = selectedOptionIds.includes(randomOption.id);

  return (
    <div className="app-container">
      <Header />
      <Stages stages={stages} />
      <Question isStageCompleted={isCorrectAnswer} option={randomOption} />
      <Screen
        addId={addId}
        isCorrectAnswer={isCorrectAnswer}
        options={stageOptions}
        selectedOptionIds={selectedOptionIds}
      />
      <button className={`button-next ${isCorrectAnswer ? 'button-green' : 'button-grey'}`}>
        Следующий уровень
      </button>
    </div>
  );
};

export default App;
