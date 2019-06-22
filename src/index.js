import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { searchSuccess } from './actions/search';

import App from './App';

const store = createStore(reducer);

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

setTimeout(() => {
  store.dispatch(searchSuccess(results));
}, 2000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
