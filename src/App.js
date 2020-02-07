import React, { Component } from 'react';
import './App.css';
import { CharacterList, ComicList, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComicList />
        <CharacterList />
        <Footer />
      </div>
    );
  }
}

export default App;
