import React from 'react';

import Details from './Details';

import './index.css'
import unknownImageUrl from '../../assets/images/unknown-bird.png'

const Question = (props) => {
  const { isStageCompleted, option } = props;

  return (
    <div className="question">
      <img
        alt=''
        className="question-image"
        src={isStageCompleted ? option.imageUrl : unknownImageUrl}
      />
      <Details {...props} />
    </div>
  )
};

export default Question;