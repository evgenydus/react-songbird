import React from 'react';
import './index.css'

const Option = (props) => {
  return (
    <li className="option">
      <div className="option-indicator" />
      <span className="option-text" /*onClick={}*/>{props.name}</span>
    </li>
  )
};

export default Option;
