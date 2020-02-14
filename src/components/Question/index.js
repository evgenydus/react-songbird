import React from 'react';

import Details from './Details';

import './index.css'
import unknownBird from '../../assets/images/unknown-bird.jpg'

const Question = ({ birds }) => {
  return (
    <div className="question">
      <img className="question-image" src={unknownBird} alt='' />
      <Details birdData={birds} />
    </div>
  )
};

export default Question;