import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Safe Water</h2>
        </div>
        <p className="App-intro">
          Know the water you drink.
        </p>
      </div>
    );
  }
}

export default App;
