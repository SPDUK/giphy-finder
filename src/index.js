import '@atlaskit/css-reset';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { Route } from 'react-router-dom';
import history from './lib/history';
import reducer from './reducers';
import searchSaga from './sagas/search';
import randomSaga from './sagas/random';

import { App, Search, Trending, Random } from './components/pages';

const sagas = createSagaMiddleware();
const store = createStore(
  reducer(history),
  applyMiddleware(routerMiddleware(history), createLogger(), sagas)
);

sagas.run(searchSaga);
sagas.run(randomSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Search} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/random" component={Random} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
