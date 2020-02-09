import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

import store from './store'
import App from './App'

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

export default Main;