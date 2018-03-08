import React, { Component } from 'react';
import CardList from './components/CardContainer';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Magic the Gathering</h1>
          <h4v className="App-sub-title">the app with cards and info :)</h4v>
        </header>
        <CardList />
      </div>
    );
  }
}

export default App;
