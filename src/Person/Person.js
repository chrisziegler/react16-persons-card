import React from 'react';
import './Person.css';

const person = ( props ) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <span className="fa fa-arrow-circle-o-right"></span>
      <input type="text" onChange={props.changed} value={props.name} />
      
      {/* <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      /> */}
    </div>
)
};

export default person;