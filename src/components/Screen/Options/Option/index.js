import React, {useCallback} from 'react';
import './index.css'

const Option = ({ name, onClick, id }) => {
  const handleClick = useCallback(() => {
    onClick(id)
  }, [onClick, id]);

  return (
    <li className="option" onClick={handleClick} >
      <div className="option-indicator" />
      <span className="option-text" >{name}</span>
    </li>
  )
};

export default Option;
