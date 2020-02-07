import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

// import characterList from './characterList';
import { characterListReducer, comicListReducer } from './reducers';
import rootSaga from './sagas';

const reducer = combineReducers({ characterListReducer, comicListReducer });
const sagaMiddleware = createSagaMiddleware();
const middleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);
sagaMiddleware.run(rootSaga);

export default store;
export * from './reducers';
export * from './constants';