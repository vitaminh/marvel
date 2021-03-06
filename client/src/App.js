import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import {ComicList, SingleComic, Footer, Header} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/comic/:id" component={SingleComic} />
          <Route path="/" component={ComicList} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
