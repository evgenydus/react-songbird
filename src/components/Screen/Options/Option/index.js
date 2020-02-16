import React from 'react';
import './index.css'

const Option = ({ name, setChosenOptionId, id }) => {
  const handleOptionClick = ({ currentTarget: {id} }) => {
    setChosenOptionId(id)
  };

  return (
    <li className="option" onClick={handleOptionClick} id={id}>
      <div className="option-indicator" />
      <span className="option-text" >{name}</span>
    </li>
  )
};

export default Option;
