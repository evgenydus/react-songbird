import React, { useState } from 'react';
import './index.css';
import Header from '../Header';
import Stages from '../Stages';
import Question from '../Question';
import Screen from '../Screen';
import birdsData from '../../birds-data';
import stages from '../Stages/stages';
import { getRandomNumber } from '../../helpers/utils';


const App = () => {
  const [ currentStage, setStage ] = useState(0);
  let birds = birdsData[currentStage].slice();
  const [ questionBirdName, setQuestionBirdName ] = useState('*****');

  const revomeUsedBird = (birdsArray, id) => {
    birdsArray = birdsArray.filter(bird => bird.id !== id);
  };
  //id comes from clicked option?


  return (
    <div className="app-container">
      <Header />
      <Stages stages={stages} currentStage={currentStage}/>
      <Question birds={birds[getRandomNumber(birds.length)]} />
      <Screen birds={birdsData[currentStage]} />
      <button className="button-next button-blue">Next level</button>
    </div>
  );
};

export default App;

