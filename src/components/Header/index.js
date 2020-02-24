import React from 'react';

import logo from '../../assets/images/logo.png'
import './index.css'

const Header = ({ currentScore }) => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <div className="score">Score: {currentScore}</div>
    </div>
  )
};

export default Header;
