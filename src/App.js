import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <code>Animal List</code>
          <List />
        </header>
      </div>
    );
  }
}

export default App;
