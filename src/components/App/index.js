import React, {useEffect, useState} from 'react';

import Header from '../Header';
import Question from '../Question';
import Screen from '../Screen';
import Stages from '../Stages';

import './index.css';
import stages from '../../birds-data';
import { getRandomNumber } from '../../helpers/utils';

const App = () => {
  const currentStageIndex = 0;
  const stageOptions = stages[currentStageIndex].options;
  const randomOptionIndex = getRandomNumber(stageOptions.length - 1);
  const randomOption = stageOptions[randomOptionIndex];

  return (
    <div className="app-container">
      <Header />
      <Stages stages={stages} />
      <Question isStageCompleted={false} option={randomOption} />
      <Screen
        options={stageOptions}
      />
      <button className="button-blue button-next">Next level</button>
    </div>
  );
};

export default App;
