import React, { Component } from "react";

class ChildUser extends Component {
  state = {
    user: "John",
    value: ""
  };

  handleInput = value => {
    this.setState({
      value: value
    });
  };

  handleUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <>
        <input
          onChange={event => this.handleInput(event.target.value)}
          type="text"
          value={this.state.value}
        />
        <select onChange={event => this.handleUser(event.target.value)}>
          {this.props.usernames.map(data => (
            <option value={data}>{data}</option>
          ))}
        </select>
        <button
          onClick={() =>{this.props.todo(this.state.user, this.state.value);this.setState({user: "John",value: ""})}}
          type="button"
          disabled={!this.state.value}
        >
          Submit
        </button>
      </>
    );
  }
}

export default ChildUser;
