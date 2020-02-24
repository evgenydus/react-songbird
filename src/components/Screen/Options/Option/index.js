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
  stageScore,
}) => {
  const handleClick = useCallback(() => {
    onClick(id);
    if (!isStageCompleted) {
      addId(id);
      if (!isCorrectAnswer && !isSelected) {
        setStageScore(stageScore - 1)
      }
    }
  }, [addId, id, isStageCompleted, onClick, isCorrectAnswer, stageScore, setStageScore]);

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
