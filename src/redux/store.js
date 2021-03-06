import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas';
import reducer from './reducer';

const customComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const enhancers = customComposer(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer, enhancers);

sagaMiddleware.run(rootSaga)

export default store;
