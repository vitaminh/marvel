import React, { Component } from 'react';
import './App.css';
import { CharacterList, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterList />
        <Footer />
      </div>
    );
  }
}

export default App;
