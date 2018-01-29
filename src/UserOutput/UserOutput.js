import React from 'react';

const userOutput = (props) => {
  const outputStyle = {
    color: "#333",
    fontWeight: 300,
    backgroundColor: "lightgrey",
    border: "1px solid black",
    marginBottom: 5
  };

  return (
    <div style={outputStyle}>
      <p style={{fontWeight: 600}}>{props.children}</p>
      <p>Say my name!</p>
      <p>{props.name}. You're goddam right!</p>
    </div>
  );
};

export default userOutput;