import React from 'react';
import './CharComponent.css'
import Radium from 'radium';

const charComponent = (props) => {
  // const style = {
  //   className:"charComponent simple"
  // }
  return (
    <div onClick={props.clicked} className="charComponent">{props.character}</div>
  );
}

export default Radium(charComponent);