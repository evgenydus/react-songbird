import React from 'react';

import Option from './Option';

import './index.css'

const Options = ({ addId, options, onOptionClick, selectedOptionIds }) => (
  <ul className="options">
    {options.map(({ id, name }) => (
      <Option
        key={id}
        addId={addId}
        id={id}
        isCorrectAnswer={false}
        isSelected={selectedOptionIds.includes(id)}
        name={name}
        onClick={onOptionClick}
      />
    ))}
  </ul>
);

export default Options;
