import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  clickHandler() {
    axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
    .then(function(response) {
      console.log('response ', response);
    })
    .catch(function(err) {
      console.log('err! ', err);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" onClick={this.clickHandler}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
