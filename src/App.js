import React, { Component } from 'react';
import './App.css';
import { CharacterList } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterList />
      </div>
    );
  }
}

export default App;
