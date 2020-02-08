import React, { Component } from 'react';
import './App.css';
import { ComicList, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComicList />
        <Footer />
      </div>
    );
  }
}

export default App;
