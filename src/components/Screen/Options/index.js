import React from 'react';

import Option from './Option';

import './index.css'

const Options = ({ addId, correctAnswerId, isStageCompleted, onOptionClick, options,
                   selectedOptionIds }) => (
  <ul className="options">
    {options.map(({ id, name }) => (
      <Option
        key={id}
        addId={addId}
        id={id}
        isCorrectAnswer={id === correctAnswerId}
        isSelected={selectedOptionIds.includes(id)}
        isStageCompleted={isStageCompleted}
        name={name}
        onClick={onOptionClick}
      />
    ))}
  </ul>
);

export default Options;
