import React from 'react';

import Info from './Info';
import Options from './Options';

import './index.css'

const Screen = ({ birds }) => {

  return (
    <div className="screen">
      <Options birds={birds} />
      <Info />
    </div>
  )
};

export default Screen;
