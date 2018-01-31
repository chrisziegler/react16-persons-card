import React from 'react';
import './Person.css';


const person = (props) => {

    return (
    <div>
        <div className="Person">
          <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
          <p>{props.children}</p>
          <span className="fa fa-arrow-circle-o-right"></span>
          <input type="text" onChange={props.changed} value={props.name} />
        </div>
    </div>
  );
}
  

export default person;