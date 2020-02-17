import React, {useCallback} from 'react';
import './index.css'

const Option = ({ addId, id, isCorrectAnswer, isSelected, name, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(id);
    addId(id)
  }, [addId, id, onClick]);

  return (
    <li className="option" onClick={handleClick} >
      <div className={`option-indicator ${isSelected ? 'indicator-selected' : 'indicator-default'}`} />
      <span className="option-text" >{name}</span>
    </li>
  )
};

export default Option;
