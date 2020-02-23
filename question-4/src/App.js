import React, { Component } from 'react';
import './App.css';
import ParentClass from "./components/parentClass";
import ParentUser from "./components/userLevel234";

class App extends Component {
  render(){
    return (
      <div className="App">
        <ParentClass/>
        <h4>Usernames</h4>
        <ParentUser/>
      </div>
    );
  }
}

export default App;