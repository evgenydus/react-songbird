import React from 'react';
import Options from './Options';
import Info from './Info';
import './index.css'

const Screen = (props) => {

  return (
    <div className="screen">
      <Options birds={props.birds} />
      <Info />
    </div>
  )
};

export default Screen;
