import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
  
  let length = props.length;
  if (length < 5) {
    return (
      <p className="ValidationComponent">Text too short</p>
    )
  }
  return (
    <p className="ValidationComponent good">Text is long enough</p>
  )
}


export default validationComponent;