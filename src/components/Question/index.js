import React from 'react';
import Details from './Details';
import './index.css'
import unknownBird from '../../assets/images/unknown-bird.jpg'

const Question = () => {
  return (
    <div className="question">
      <img className="question-image" src={unknownBird} alt='' />
      <Details />
    </div>
  )
};

export default Question;