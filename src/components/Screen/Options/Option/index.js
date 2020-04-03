import React, {useCallback} from 'react';
import './index.css'

const Option = ({
  addId,
  id,
  isCorrectAnswer,
  isSelected,
  isStageCompleted,
  name,
  onClick,
  setStageScore,
  setTotalScore,
  stageScore,
}) => {
  const handleClick = useCallback(() => {
    onClick(id);
    if (!isStageCompleted) {
      addId(id);
      if (!isCorrectAnswer && !isSelected) {
        setStageScore(stageScore - 1);
      } else {
        setTotalScore(totalScore => totalScore + stageScore);
      }
    }
  }, [
    addId,
    id,
    isCorrectAnswer,
    isSelected,
    isStageCompleted,
    onClick,
    setStageScore,
    setTotalScore,
    stageScore,
  ]);

  let indicatorStyle = 'indicator-default';

  if (isSelected) {
    indicatorStyle = isCorrectAnswer ? 'indicator-answer' : 'indicator-selected';
  }

  return (
    <li className="option" onClick={handleClick} >
      <div className={`option-indicator ${indicatorStyle}`}/>
      <span className="option-text" >{name}</span>
    </li>
  )
};

export default Option;
