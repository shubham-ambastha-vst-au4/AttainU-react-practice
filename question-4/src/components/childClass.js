import React, { Component } from "react";

class ChildClass extends Component {
  render() {
    return (
      <input
        type="text"
        onChange={event => this.props.name(event.target.value)}
      />
    );
  }
}

export default ChildClass;