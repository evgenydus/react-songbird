import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Question from '../Question';
import Screen from '../Screen';
import Stages from '../Stages';

import './index.css';
import stages from '../../birds-data';
import { getRandomNumber } from '../../helpers/utils';

const defaultStageIndex = 0;
const defaultStageScore = 5;

const App = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(defaultStageIndex);
  const [stageOptions, setStageOptions] = useState(stages[currentStageIndex].options);
  const [randomOptionIndex, setRandomOptionIndex] = useState(getRandomNumber(stageOptions.length - 1));
  const [randomOption, setRandomOption] = useState(stageOptions[randomOptionIndex]);

  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);
  const selectedOption = stageOptions.find(option => option.id === selectedOptionId);

  const [stageScore, setStageScore] = useState(defaultStageScore);
  const [totalScore, setTotalScore] = useState(0);

  const addId = (id) => {
    setSelectedOptionIds([...selectedOptionIds, id])
  };

  const isStageCompleted = selectedOptionIds.includes(randomOption.id);

  useEffect(() => {
    setStageOptions(stages[currentStageIndex].options);
    setRandomOptionIndex(getRandomNumber(stageOptions.length - 1));
    setRandomOption(stageOptions[randomOptionIndex]);
  }, [currentStageIndex, stageOptions, randomOptionIndex]);

  const handleNextLevelClick = () => {
    if (currentStageIndex < stages.length - 1) {
      setCurrentStageIndex(currentStageIndex + 1);
      setSelectedOptionIds([]);
      setSelectedOptionId(null);
      setStageScore(defaultStageScore);
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
        selectedOption={selectedOption}
        selectedOptionIds={selectedOptionIds}
        setSelectedOptionId={setSelectedOptionId}
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
