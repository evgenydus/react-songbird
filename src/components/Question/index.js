import React from 'react';
import Details from './Details';
import './index.css'
import unknownBird from '../../assets/images/unknown-bird.jpg'

const Question = (props) => {
  return (
    <div className="question">
      <img className="question-image" src={unknownBird} alt='' />
      <Details birdData={props.birds} />
    </div>
  )
};

export default Question;