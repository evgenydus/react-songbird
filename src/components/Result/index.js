import React from 'react';
import './index.css'

const Result = ({ maxScore, totalScore }) => {
  const completeGameText = 'Поздравляем!';
  const winText = 'Вам присвоена ученая степень орнитолога!';
  const loseText = `Вы прошли викторину и набрали ${totalScore} из ${maxScore} возможных баллов. Попробуйте еще раз!`;
  return (
    <div className="result">
      <h2 className="result-title">
        {completeGameText}
      </h2>
      <p className="result-text">
        {totalScore < maxScore ? loseText : winText}
      </p>
    </div>
  )
};

export default Result;