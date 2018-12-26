import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Animal List</code>
          </p>
          <List />
        </header>
      </div>
    );
  }
}

export default App;
