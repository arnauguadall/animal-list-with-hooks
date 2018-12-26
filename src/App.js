import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List/List';


export default function App() {
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
