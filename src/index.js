import '@atlaskit/css-reset';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import history from './lib/history';
import reducer from './reducers';
import { searchSuccess } from './actions/search';
import searchSaga from './sagas/search';

import { App, Search, Trending, Random } from './components/pages';

const sagas = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(createLogger(), sagas));

sagas.run(searchSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route exact path="/" component={Search} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/random" component={Random} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
