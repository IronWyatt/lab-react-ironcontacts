import React, { Component } from 'react';
import logo from './logo.svg';
import IterationOne from './components/IterationOne.js';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <IterationOne  ></IterationOne>
      </div>
    );
  }
}

export default App;
