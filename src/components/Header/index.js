import React from 'react';

import logo from '../../assets/images/logo.png'
import './index.css'

const Header = ({ totalScore }) => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <div className="score">Score: {totalScore}</div>
    </div>
  )
};

export default Header;
