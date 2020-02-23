import React, {useCallback} from 'react';
import './index.css'

const Option = ({ addId, id, isCorrectAnswer, isSelected, isStageCompleted, name, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(id);
    if (!isStageCompleted) {
      addId(id)
    }
  }, [addId, id, isStageCompleted, onClick]);

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
