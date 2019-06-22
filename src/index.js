import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { searchSuccess } from './actions/search';
import searchSaga from './sagas/search';

import App from './App';

const sagas = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(createLogger(), sagas));

sagas.run(searchSaga);

const results = [
  {
    full:
      'https://media2.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=f35e07535d0e6acf75564d426bb43c42&rid=giphy.gif',
    thumbnail:
      'https://media2.giphy.com/media/mlvseq9yvZhba/100_s.gif?cid=f35e07535d0e6acf75564d426bb43c42&rid=100_s.gif'
  },
  {
    full:
      'https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=f35e07535d0e6acf75564d426bb43c42&rid=giphy.gif',
    thumbnail:
      'https://media2.giphy.com/media/JIX9t2j0ZTN9S/100_s.gif?cid=f35e07535d0e6acf75564d426bb43c42&rid=100_s.gif'
  }
];

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
