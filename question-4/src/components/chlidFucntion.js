import React from "react";

const ChildFunction = props => {
  return (
    <input type="text" onChange={event => props.name(event.target.value)} />
  );
};

export default ChildFunction;