import React, { Component } from 'react';
import CardList from './components/CardList';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Magic the Gathering</h1>
          <h4 className="App-sub-title">The POC to study React Web App</h4>
        </header>
        <CardList />
      </div>
    );
  }
}

export default App;
