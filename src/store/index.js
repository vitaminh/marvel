import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import characterList from './characterList';
import rootSaga from './sagas';

const reducer = combineReducers({ characterList });
const sagaMiddleware = createSagaMiddleware();
const middleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);
sagaMiddleware.run(rootSaga);

export default store;
export * from './characterList';
export * from './constants';