import React from 'react';

import logo from '../../assets/images/logo.png'
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <div className="score">Score: 60</div>
    </div>
  )
};

export default Header;
