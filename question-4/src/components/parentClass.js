import React, { Component } from "react";
import ChildClass from "./childClass";
import ChildFunction from "./chlidFucntion";

class ParentClass extends Component {
  state = {
    functionValue: "",
    classValue: ""
  };

  handleCLassValue = value => {
    this.setState({
        classValue: value
    });
  };

  handleFunctionValue = value => {
    this.setState({
        functionValue: value
    });
  };

  render() {
    return (
      <div>
        <span style={{ display: "block" }}>
          See Here Class:{this.state.classValue}
        </span>
        <ChildClass name={val => this.handleCLassValue(val)} />
        <span style={{ display: "block" }}>
          See Here Function:{this.state.functionValue}
        </span>
        <ChildFunction name={val => this.handleFunctionValue(val)} />
      </div>
    );
  }
}

export default ParentClass;