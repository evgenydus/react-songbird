import React from 'react';

import Option from './Option';

import './index.css'

const Options = ({ birds }) => {
  return (
    <ul className="options">
      {birds.map(({ id, name }) => {
        return <Option
          name={name}
          key={id} />
        }
      )}
    </ul>
  )
};

export default Options;
