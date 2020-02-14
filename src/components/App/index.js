import React, { useState } from 'react';

import Header from '../Header';
import Question from '../Question';
import Screen from '../Screen';
import Stages from '../Stages';

import './index.css';
import birdsData from '../../birds-data';
import stages from '../Stages/stages';
import { getRandomNumber } from '../../helpers/utils';


const App = () => {
  const defaultStage = 0;
  const [currentStage, setStage] = useState(defaultStage);

  const defaultBirdName = '*****';
  const [questionBirdName, setQuestionBirdName] = useState(defaultBirdName);

  let birds = birdsData[currentStage].slice();

  const revomeUsedBird = (birdsArray, id) => {
    birdsArray = birdsArray.filter(bird => bird.id !== id);
  };
  //id comes from clicked option?


  return (
    <div className="app-container">
      <Header />
      <Stages currentStage={currentStage} stages={stages} />
      <Question birds={birds[getRandomNumber(birds.length)]} />
      <Screen birds={birdsData[currentStage]} />
      <button className="button-blue button-next">Next level</button>
    </div>
  );
};

export default App;

