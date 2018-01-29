import React from 'react';
import './UserInput.css';


const userInput = (props) => {
  return (
    <div className="UserInput">
      <form>
      <input 
      type="text"
      onChange={props.change}
      value={props.name}
      />
      </form>
    </div>
  );
};

export default userInput;

