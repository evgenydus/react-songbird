import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Question from '../Question';
import Screen from '../Screen';
import Stages from '../Stages';

import './index.css';
import stages from '../../birds-data';
import { getRandomNumber } from '../../helpers/helpers';
import Result from '../Result';

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
  const [isGameComplete, setIsGameComplete] = useState(false);

  const addId = (id) => {
    setSelectedOptionIds([...selectedOptionIds, id])
  };

  const maxScore = defaultStageScore * stages.length;
  const isStageCompleted = selectedOptionIds.includes(randomOption.id);

  useEffect(() => {
    setStageOptions(stages[currentStageIndex].options);
    setRandomOptionIndex(getRandomNumber(stageOptions.length - 1));
    setRandomOption(stageOptions[randomOptionIndex]);
    // eslint-disable-next-line
  }, [currentStageIndex, stageOptions]);

  const handleNextLevelClick = () => {
    if (currentStageIndex >= stages.length - 1) {
      setIsGameComplete(true)
    } else {
      setCurrentStageIndex(currentStageIndex + 1);
      setSelectedOptionIds([]);
      setSelectedOptionId(null);
      setStageScore(defaultStageScore);
    }
  };

  const handlePlayAgainClick = () => {
    setCurrentStageIndex(defaultStageIndex);
    setSelectedOptionIds([]);
    setSelectedOptionId(null);
    setStageScore(defaultStageScore);
    setTotalScore(0);
    setIsGameComplete(false)
  };

  return (
    <div className="app-container">
      <Header totalScore={totalScore} />
      <Stages currentStageIndex={currentStageIndex} stages={stages} />
      {isGameComplete ? (
        <div>
          <Result maxScore={maxScore} totalScore={totalScore}/>
          <button
            className="button play-again"
            onClick={handlePlayAgainClick}
          >
            Начать сначала
          </button>
        </div>
      ) : (
        <div>
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
            className="button button-next"
            disabled={!isStageCompleted}
            onClick={handleNextLevelClick}
          >
            Следующий уровень
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
