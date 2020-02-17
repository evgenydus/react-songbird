import React from 'react';

import Option from './Option';

import './index.css'

const Options = ({ options, onOptionClick }) => (
  <ul className="options">
    {options.map(({ id, name }) => (
      <Option key={id} name={name} onClick={onOptionClick} id={id}/>
    ))}
  </ul>
);

export default Options;
