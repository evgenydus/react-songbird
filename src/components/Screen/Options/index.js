import React from 'react';

import Option from './Option';

import './index.css'

const Options = ({ options, setChosenOptionId }) => {
  return (
    <ul className="options">
      {options.map(({ id, name }) => {
        return (
          <Option key={id} name={name} setChosenOptionId={setChosenOptionId} id={id} />
        )
      })}
    </ul>
  )
};

export default Options;
