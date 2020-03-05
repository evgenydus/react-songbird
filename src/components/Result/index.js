import React from 'react';
import './index.css'

const Result = ({ maxScore, totalScore }) => {
  return (
    <div className="result">
      <h2 className="result-title">
        Поздравляем!
      </h2>
      <p className="result-text">
        {totalScore < maxScore ? (
          `Вы прошли викторину и набрали ${totalScore} из ${maxScore} возможных баллов.
           Попробуйте еще раз!`
        ) : (
          'Вам присвоена ученая степень орнитолога!'
        )
        }
      </p>
    </div>
  )
};

export default Result;