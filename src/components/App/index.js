import React from 'react';
import './index.css';
import Header from '../Header';
import Stages from '../Stages';
import Question from '../Question';
import Screen from '../Screen';


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Stages />
      <Question />
      <Screen />
      <button className="button-next button-green">Next Level</button>
    </div>
  );
};

export default App;
