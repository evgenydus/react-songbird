import React, { useState } from 'react';
import './index.css'
import Option from './Option';

const Options = (props) => {

  return (
    <ul className="options">
      {props.birds.map((bird) => {
        return <Option
          name={bird.name}
          key={bird.id} />
        }
      )}
    </ul>
  )
};

export default Options;
