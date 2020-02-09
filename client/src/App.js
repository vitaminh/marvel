import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import { ComicList, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/">
            <ComicList />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
