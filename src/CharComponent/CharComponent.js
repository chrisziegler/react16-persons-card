import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
  return (
    <div onClick={props.clicked} className="charComponent">{props.character}</div>
  );
}

export default charComponent;